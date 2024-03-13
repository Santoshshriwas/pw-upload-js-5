// Object containing items with names, categories, and prices in USD
const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 99999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 149955,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 49955,
    },
    {
        name: "Samesung",
        category: "mobile",
        priceUSD: 4996,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);
