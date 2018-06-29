import { createSelector } from 'reselect';

export function createGetWishlist() {
    return createSelector([
        (state) => state.favorites.listings,
        (state, wishlistId) => wishlistId,
    ], (listings, wishlistId) => {
        if (!listings) {
            return;
        }

        return listings[wishlistId];
    });
}
