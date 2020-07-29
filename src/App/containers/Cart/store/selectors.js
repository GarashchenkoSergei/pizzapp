export const cartSelector = (state) => state.cart;

export const groupedCart = (state) => {
  const groupedById = state.reduce(function (accum, item) {
    accum[item.id] = accum[item.id] || [];
    accum[item.id].push(item);
    
    return accum;
  }, []);
  return groupedById;
}
