import * as actionTypes from './actionTypes';

const wishlistInitalState = {
    items: [],
};

const initialState = {
    listings: {},
    keys: [],
};

function addToFavoritesReducer(state, action) {
    const { wishlistId, item } = action.payload;
    const wishlist = state.listings[wishlistId] || wishlistInitalState;

    return {
        ...state,
        listings: {
            ...state.listings,
            [wishlistId]: {
                ...wishlist,
                items: [...wishlist.items, item],
            },
        },
        keys: state.keys.includes(wishlistId) ? state.keys : [...state.keys, wishlistId],
    };
}

function removeFavoritesReducer(state, action) {
    const { wishlistId, item } = action.payload;
    const wishlist = state.listings[wishlistId] || wishlistInitalState;

    const indexToRemove = wishlist.items.findIndex((entry) => entry.id === item.id);
    const items = [...wishlist.items.slice(0, indexToRemove), ...wishlist.items.slice(indexToRemove + 1)];

    /* TODO
    OMIT IF ITEMS EMPTY */

    return {
        ...state,
        listings: {
            ...state.listings,
            [wishlistId]: {
                ...wishlist,
                items,
            },
        },
    };
}

// --------------------------------------------------

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
        return addToFavoritesReducer(state, action);
    case actionTypes.REMOVE_FROM_FAVORITES:
        return removeFavoritesReducer(state, action);
    default:
        return state;
    }
}

export default favoritesReducer;
