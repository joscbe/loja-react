import * as types from './types'

export const reducer = (state, action) => {
    switch(action.type) {
        case types.FETCH_CART_INIT:
            return {
                ...state,
            }
        case types.FETCH_CART_SUCCESS:
            return{
                ...state,
                cart: action.payload
            }
        default:
            return {
                ...state
            }
    }
}