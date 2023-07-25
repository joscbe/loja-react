import * as types from './types'
import * as pinService from '../services/pinService'

export const fetchCartInit = () => ({
    type: types.FETCH_CART_INIT
})

export const fetchCartSuccess = (cart) => ({
    type: types.FETCH_CART_SUCCESS,
    payload: cart
})

export const fetchCart = async (dispatch) => {
    dispatch(fetchCartInit());
    const cart = await pinService.getCarrinho();
    dispatch(fetchCartSuccess(cart));
}

export const updateQuantUpItem = async (itemId, dispatch) => {
    dispatch(fetchCartInit())
    const cart = await pinService.quantInItemCart(itemId, '+');
    dispatch(fetchCartSuccess(cart));
}

export const updateQuantSubItem = async (itemId, dispatch) => {
    dispatch(fetchCartInit());
    const cart = await pinService.quantInItemCart(itemId, '-');
    dispatch(fetchCartSuccess(cart));
}