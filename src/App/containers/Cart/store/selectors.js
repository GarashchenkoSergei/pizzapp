export const cartSelector = (state) => state.cart;

export const groupedCart = (state) => {
  const groupedById = state.reduce(function (accum, item) {
    accum[item.id] = accum[item.id] || [];
    accum[item.id].push(item);
    
    return accum;
  }, []);
  return groupedById;
}

export const cartSum = (state) => {
  const sum = state.reduce(function (accum, item) {
    return accum + item.cost || 0;
  }, 0);
  return Math.floor(sum * 100) / 100;
}

export const cartSumEuro = (state) => {
  const sum = state.reduce(function (accum, item) {
    return accum + item.cost || 0;
  }, 0);
  return Math.floor(sum * 85) / 100;
}
