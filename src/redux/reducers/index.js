import { addCardItems } from "../actions";
import { initialState } from "../state";


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case addCardItems().type: {
            return { ...state, cart: action.payload }
        }
        default: return state;
    }
}

/** */