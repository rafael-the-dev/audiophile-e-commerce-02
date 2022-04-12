import { addCardItems } from "../actions";
import { initialState } from "../state";


const addCartItemFunc = ({ action, state}) => {
    const newItem = action.payload;
    const list = [ ...state.cart ];
    const newItemIndex = list.findIndex(listItem => listItem.item.id === newItem.id);
    const hasNewItem = newItemIndex !== -1;

    if(hasNewItem) {
        list[newItemIndex].quantity += 1;
    } else {
        list.push({ item: newItem, quantity: 1})
    }

    return { ...state, cart: list };

};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case addCardItems().type: {
            return { ...state, cart: action.payload }
        }
        default: return state;
    }
}

/** */