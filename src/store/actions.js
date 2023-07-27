import * as types from './types'
import * as pinService from '../services/pinService'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time);
    })
);

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

export const saveItemInCartInitAction = () => ({
    type: types.SAVE_ITEM_IN_CART_INIT
})

export const saveItemInCartSuccessAction = (newItem) => ({
    type: types.SAVE_ITEM_IN_CART_SUCCESSS,
    payload: newItem
})

export const saveItemInCartAction = async (dispatch, product) => {
    dispatch(saveItemInCartInitAction());

    await sleep(1000);
    //salva item no carrinho

    const newItem = await pinService.saveItemInCart(product);

    dispatch(saveItemInCartSuccessAction(newItem));
}

export const removeItemInCartInitAction = () => ({
    type: types.REMOVE_ITEM_IN_CART_INIT
})

export const removeItemInCartSuccessAction = (cart) => ({
    type: types.REMOVE_ITEM_IN_CART_SUCCESS,
    payload: cart
})

export const removeItemInCartAction = async (itemId, dispatch) => {
    dispatch(removeItemInCartInitAction());

    await pinService.removeItemInCart(itemId);

    const cart = await pinService.getCarrinho();

    dispatch(removeItemInCartSuccessAction(cart));
}

export const fetchProductsInitAction = () => ({
    type: types.FETCH_PRODUCTS_INIT
})

export const fetchProductsSuccessAction = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsAction = async (dispatch) => {
    dispatch(fetchProductsInitAction())

    await sleep(200);

    const products = await pinService.getProducts();
    dispatch(fetchProductsSuccessAction(products));
}