export const getAllCartItems = state => state.cart;
export const getCartLenght = state => state.cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);
export const getTotalCartAmout = state => state.cart.reduce((prevValue, currentValue) => prevValue + currentValue.total, 0);
export const getCartItemById = id => state => state.find(item => item.id === id);