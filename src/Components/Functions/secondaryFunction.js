export const totalPriceItems = order => {
    const countTopping = order.topping ? order.topping.filter(item => item.checked).length : 0;
    const priceTopping = order.price * 0.1 * countTopping;
    return (order.price + priceTopping) * order.count;
};

export const formatCurrency = value => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB'});

export const projection = rules => {
    const keys = Object.keys(rules);
    return obj => keys.reduce((newObject, key) => {
        newObject[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);
        return newObject;
    }, {});
};