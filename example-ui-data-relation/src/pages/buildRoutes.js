import nprogress from 'nprogress';
import homeRoute from './home';
import aboutRoutes from './about';
import errorRoutes from './error';
import favoritesRoutes from './wishlists';
import productRoutes from './products';

const isClient = typeof window !== 'undefined';

async function loadComponent(promise) {
    let Component;

    // Start growing the loading bar
    isClient && nprogress.start();

    try {
        Component = await promise;
    } finally {
        // We are done loading!
        isClient && nprogress.done();
    }

    return Component.default;
}

// -----------------------------------------------------

export default function buildRoutes() {
    return {
        path: '/',
        indexRoute: homeRoute(),
        childRoutes: [
            ...aboutRoutes(loadComponent),
            ...productRoutes(loadComponent),
            ...favoritesRoutes(loadComponent),
            ...errorRoutes(loadComponent),
        ],
    };
}
