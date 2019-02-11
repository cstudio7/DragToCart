import {
    ADD_TO_CART
} from './types'

export function addItemToCart(product) {
    return {
        type: ADD_TO_CART,
        product
    };
}
