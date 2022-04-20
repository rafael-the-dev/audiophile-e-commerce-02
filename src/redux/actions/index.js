
export const addCartItems = payload => ({
    payload,
    type: "ADD_CART_ITEMS"
});

export const addCartItem = payload => ({
    payload,
    type: "ADD_CART_ITEM"
});

export const editCartItem = payload => ({
    payload,
    type: "EDIT_CART_ITEM"
});

export const removeAllCartItems = () => ({
    type: "REMOVE_ALL_CART_ITEMS"
});

export const finishPayment  = () => ({
    type: "FINISH_PAYMENT"
});