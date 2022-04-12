export const getAllCartItems = state => state.cart;
export const getCartLenght = state => state.cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);