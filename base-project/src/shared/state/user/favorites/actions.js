import * as actionTypes from './actionTypes';

export function addToFavorites(wishlistId, item) {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_TO_FAVORITES,
            payload: { wishlistId, item },
        });
    };
}

export function removeFromFavorites(wishlistId, item) {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REMOVE_FROM_FAVORITES,
            payload: { wishlistId, item },
        });
    };
}
