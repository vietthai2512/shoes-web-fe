export const allProductsUrl = 'https://course-api.com/javascript-store-products';
export const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element)
        return element;
    throw new Error(`Please check "${selection}" selector, no such element exist`);
};
export const throttled = (fn, delay = 200) => {
    let last = 0;
    return function (...args) {
        const now = (new Date).getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    };
};
export const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2));
    return formattedPrice;
};
export const getStorageItem = (item) => {
    let storeageItem = localStorage.getItem(item);
    let storeageItemObj = [];
    if (storeageItem) {
        storeageItemObj = JSON.parse(storeageItem);
    }
    return storeageItemObj;
};
export const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};
//# sourceMappingURL=utils.js.map