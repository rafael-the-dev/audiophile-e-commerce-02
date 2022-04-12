import { addCardItems, addCartItem } from "../actions";
import { initialState } from "../state";


const addCartItemFunc = ({ action, state}) => {
    const { item, quantity } = action.payload;
    const list = [ ...state.cart ];
    const itemIndex = list.findIndex(listItem => listItem.item.id === item.id);
    const hasNewItem = itemIndex !== -1;

    if(hasNewItem) {
        list[itemIndex].quantity += quantity;
    } else {
        list.push({ item: item, quantity: 1})
    }

    return { ...state, cart: list };

};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case addCardItems().type: {
            return { ...state, cart: action.payload }
        }
        case addCartItem().type: {
            return addCartItemFunc({ action, state });
        }
        default: return state;
    }
}

/** */