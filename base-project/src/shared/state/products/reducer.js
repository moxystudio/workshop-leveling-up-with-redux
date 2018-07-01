import * as actionTypes from './actionTypes';

const initialState = {
    page: 1,
    items: [],
    filterBy: 'Shoes',
    sortBy: 'asc',
};

function loadReducer(state, action) {
    const { items } = action.payload;

    return {
        ...state,
        items,
    };
}

function loadMoreReducer(state, action) {
    const { items, page } = action.payload;

    return {
        ...state,
        page,
        items: [...state.items, ...items],
    };
}

// --------------------------------------------------

export function productsReducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LOAD:
        return loadReducer(state, action);
    case actionTypes.LOAD_MORE:
        return loadMoreReducer(state, action);
    default:
        return state;
    }
}

export default productsReducer;
