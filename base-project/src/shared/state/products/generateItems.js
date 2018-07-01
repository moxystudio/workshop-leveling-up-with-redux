import tshirts from 'shared/media/images/products';

const categories = [
    'Shoes',
    'Bags',
    'Jeans',
    'Dresses',
];

const images = [
    tshirts.m,
    tshirts.o,
    tshirts.x,
    tshirts.y,
];

const generateItems = (pageNumber) => {
    const products = [];

    for (let x = 0; x < 20; x += 1) {
        products.push({
            id: `${pageNumber}${x}`,
            name: `Product ${x}`,
            price: Math.floor(Math.random() * 10000) + 200,
            category: categories[Math.floor(Math.random() * 3)],
            src: images[Math.floor(Math.random() * 4)],
        });
    }

    return products;
};

export default (numberOfPages) => {
    const list = [];

    for (let x = 0; x < numberOfPages; x += 1) {
        list[x] = generateItems(x);
    }

    return list;
};
