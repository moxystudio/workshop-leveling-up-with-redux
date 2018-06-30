import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, createMemoryHistory } from 'react-router';
import Helmet from 'react-helmet';
import pify from 'pify';
import { buildRoutes } from './App';
import renderDocument from './index.html';

import buildStore from 'shared/state/buildStore';

const matchAsync = pify(match, { multiArgs: true });

// Build our routes
const routes = buildRoutes();

export async function render({ req, res, buildManifest }) {
    const history = createMemoryHistory();
    const store = buildStore(history);

    // Match req against our routes
    const [redirectLocation, renderProps] = await matchAsync({ history, routes, location: req.url });

    // Is it to redirect?
    if (redirectLocation) {
        return res.redirect(redirectLocation.pathname + redirectLocation.search);
    }
    // 404? This shouldn't happen because we have a react-router catch all route, but just in case..
    if (!renderProps) {
        return res.status(404).end();
    }

    // Render HTML that goes to into <div id="root"></div>
    const createElement = (Component, props) => <Component { ...props } serverContext={ { req, res } } />;
    const rootHtml = renderToString(
        <Provider store={ store }>
            <RouterContext
                { ...renderProps }
                createElement={ createElement } />
        </Provider>
    );

    // Render document
    const html = renderDocument({
        helmet: Helmet.renderStatic(),
        rootHtml,
        buildManifest,
        isomorphicState: {},
    });

    // Send HTML
    res.send(html);
}

export async function renderError({ err, req, res, buildManifest }) {
    // Match req against our routes
    const history = createMemoryHistory();
    const store = buildStore(history);
    const [redirectLocation, renderProps] = await matchAsync({ history, routes, location: '/internal-error' });

    // Is it to redirect?
    if (redirectLocation) {
        return res.redirect(redirectLocation.pathname + redirectLocation.search);
    }
    // If there's no error page, render a generic one
    if (!renderProps) {
        throw err;
    }

    // Render page that goes to into <div id="root"></div>
    const createElement = (Component, props) => <Component { ...props } serverContext={ { err, req, res } } />;
    const rootHtml = renderToString(
        <Provider store={ store }>
            <RouterContext
                { ...renderProps }
                createElement={ createElement } />
        </Provider>
    );

    // Render document
    const html = renderDocument({
        helmet: Helmet.renderStatic(),
        rootHtml,
        buildManifest,
        isomorphicState: { internalServerError: true },
    });

    // Send HTML
    res.send(html);
}
