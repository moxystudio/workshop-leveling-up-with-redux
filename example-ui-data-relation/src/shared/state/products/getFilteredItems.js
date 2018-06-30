export default (items, filter, sort) => {
    if (!items) {
        return [];
    }

    const filteredItems = items.filter((entry) => entry.category === filter);
    const sortedItems = filteredItems.sort((productA, productB) => productA.price - productB.price);

    return sort === 'desc' ? sortedItems.reverse() : sortedItems;
};
