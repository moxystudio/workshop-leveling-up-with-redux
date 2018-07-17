import { createSelector } from 'reselect';

export const getError = createSelector([
    (state) => state.products.error,
], (error) => error);

export const getStatus = createSelector([
    (state) => state.products.isLoading,
], (isLoading) => isLoading);

export const getItems = createSelector([
    (state) => state.products.items,
], (items) => !items ? [] : items);

export const getFilteredItems = createSelector([
    getItems,
    (state) => state.products.filterBy,
    (state) => state.products.sortBy,
], (items, filter, sort) => {
    const filteredItems = items.filter((entry) => entry.category === filter);
    const sortedItems = filteredItems.sort((productA, productB) => productA.price - productB.price);

    const taxes = Math.floor(Math.random() * 200) + 10;

    sortedItems.map((entry) => ({
        price: `$ ${entry.price + taxes}`,
    }));

    return sort === 'desc' ? sortedItems.reverse() : sortedItems;
});
