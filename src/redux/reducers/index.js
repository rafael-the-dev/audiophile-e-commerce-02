import { addCartItem, addCartItems, removeAllCartItems } from "../actions";
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

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case addCartItems().type: {
            return { ...state, cart: action.payload }
        }
        case addCartItem().type: {
            return addCartItemFunc({ action, state });
        }
        case removeAllCartItems().type: {
            return { ...state, cart: [] }
        }
        default: return state;
    }
}

/** */