import * as actionTypes from './actionTypes';

const initialState = {
    page: 1,
    items: [],
    filterBy: 'Shoes',
    sortBy: 'asc',
};

function loadReducer(state, action) {
    switch (action.type) {
    case actionTypes.LOAD_START: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actionTypes.LOAD_SUCCESS: {
        const { items } = action.payload;

        return {
            ...state,
            isLoading: false,
            items,
        };
    }
    case actionTypes.LOAD_FAIL: {
        const { error } = action.payload;

        return {
            ...state,
            error,
        };
    }

    default:
        return state;
    }
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
    case actionTypes.LOAD_START:
    case actionTypes.LOAD_SUCCESS:
    case actionTypes.LOAD_FAIL:
        return loadReducer(state, action);
    case actionTypes.LOAD_MORE:
        return loadMoreReducer(state, action);
    default:
        return state;
    }
}

export default productsReducer;
