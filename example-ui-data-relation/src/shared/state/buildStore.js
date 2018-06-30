import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import productsReducer from 'shared/state/products';
import favoritesReducer from 'shared/state/user/favorites';

export default function buildStore(history, initialState) {
    const reducer = combineReducers({
        products: productsReducer,
        favorites: favoritesReducer,
    });

    const middlewares = [
        reduxThunk,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const store = createStore(reducer, initialState, composeEnhancers(...enhancers));

    return store;
}
