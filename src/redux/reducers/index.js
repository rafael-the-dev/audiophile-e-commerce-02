import { addCartItem, addCartItems, editCartItem, finishPayment, removeAllCartItems } from "../actions";
import { initialState } from "../state";


const addCartItemFunc = ({ action, state}) => {
    const { item, quantity } = action.payload;
    const list = [ ...state.cart ];
    const itemIndex = list.findIndex(listItem => listItem.item.id === item.id);
    const hasNewItem = itemIndex !== -1;

    if(hasNewItem) {
        list[itemIndex].quantity += quantity;
        list[itemIndex].total += item.price * quantity;
    } else {
        list.push({ item: item, quantity, total: item.price * quantity })
    }

    return { ...state, cart: list };

};

const editCartItemFunc = ({ action, state}) => {
    const { item, quantity } = action.payload;
    const list = [ ...state.cart ];

    if(quantity === 0) {
        return { ...state, cart: list.filter(listItem => listItem.item.id !== item.id) };
    }

    const itemIndex = list.findIndex(listItem => listItem.item.id === item.id);
    const hasItem = itemIndex !== -1;

    if(hasItem) {
        list[itemIndex].quantity = quantity;
        list[itemIndex].total = item.price * quantity;
    } else {
        return state;
    }

    return { ...state, cart: list };
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case addCartItems().type: {
            return { ...state, cart: action.payload.cart }
        }
        case addCartItem().type: {
            return addCartItemFunc({ action, state });
        }
        case editCartItem().type: {
            return editCartItemFunc({ action, state });
        }
        case finishPayment().type: {
            return { ...state, cart: [] }
        }
        case removeAllCartItems().type: {
            return { ...state, cart: [] }
        }
        default: return state;
    }
}

/** */