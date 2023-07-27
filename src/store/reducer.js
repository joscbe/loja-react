import * as types from './types'

export const reducer = (state, action) => {
    switch(action.type) {
        case types.FETCH_CART_INIT:
            return {
                ...state,
                type: action.type
            }
        case types.FETCH_CART_SUCCESS:
            return{
                ...state,
                type: action.type,
                cart: action.payload
            }
        case types.SAVE_ITEM_IN_CART_SUCCESSS:
            return {
                ...state,
                type: action.type,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case types.REMOVE_ITEM_IN_CART_SUCCESS:
            return {
                ...state,
                type: action.type,
                cart: action.payload
            }
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                type: action.type,
                products: action.payload
            }
        default:
            return {
                ...state,
                type: action.type
            }
    }
}