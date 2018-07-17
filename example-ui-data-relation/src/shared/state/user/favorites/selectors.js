import { createSelector } from 'reselect';

export function createGetWishlist() {
    return createSelector([
        (state, wishlistId) => state.favorites.listings[wishlistId],
        (state, wishlistId) => wishlistId,
    ], (listing, wishlistId) => {
        console.log('RUNNING FACTORY SELECTOR TO GET WISHLIST NR: ', wishlistId);

        return listing;
    });
}

export const getWishlist = createSelector([
    (state, wishlistId) => state.favorites.listings[wishlistId],
    (state, wishlistId) => wishlistId,
], (listing, wishlistId) => {
    console.log('RUNNING SELECTOR TO GET WISHLIST NR: ', wishlistId);

    return listing;
});
