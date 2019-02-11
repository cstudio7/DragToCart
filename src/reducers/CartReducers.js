
import {
    ADD_TO_CART
} from '../actions/types';

const initialState = {
    cart: [],
    total: 0
};

export function cartReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = state.cart;
            newCart.push(action.product);
            const total = newCart.length;
            return {
                cart: newCart,
                total
            };

        default:
            return state;
    }
}
