import * as actionTypes from './actionTypes';
import generateItems from './generateItems';

const items = generateItems(30);

export function load() {
    return async (dispatch) => {
        const pageNumber = 1;

        dispatch({
            type: actionTypes.LOAD_START,
        });

        try {
            const itemsToLoad = await new Promise((resolve) => setTimeout(() => {
                resolve(items[pageNumber]);
            }, (Math.random() * (600 - 800)) + 800));

            if (Math.random() > 0.7) {
                throw new Error('An error occurred');
            }

            dispatch({
                type: actionTypes.LOAD_SUCCESS,
                payload: { items: itemsToLoad },
            });
        } catch (error) {
            dispatch({
                type: actionTypes.LOAD_FAIL,
                payload: { error },
            });

            throw error;
        }
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
