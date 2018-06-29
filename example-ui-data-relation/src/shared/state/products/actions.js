import * as actionTypes from './actionTypes';
import generateItems from './generateItems';

const items = generateItems(30);

export function load() {
    return (dispatch) => {
        const pageNumber = 1;
        const itemsToLoad = items[pageNumber];

        dispatch({
            type: actionTypes.LOAD,
            payload: { items: itemsToLoad },
        });
    };
}

export function loadMore() {
    return (dispatch, getState) => {
        const pageNumber = getState().products.page + 1;
        const itemsToLoad = items[pageNumber];

        if (!itemsToLoad) {
            return;
        }

        dispatch({
            type: actionTypes.LOAD_MORE,
            payload: {
                page: pageNumber,
                items: itemsToLoad,
            },
        });
    };
}
