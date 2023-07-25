/**
 * getProdutos()
 * getCarrinho()
 * saveProductInCart()
 * AlterQuantInCart()
 */

const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`;
}

const saveCart = async (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const getCarrinho = async () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const saveProductInCart = async (productId, valor) => {
    const cart = await getCarrinho();

    const newItem = {
        id: generateId(),
        productId: productId,//dá menos trabalho se eu salvar o objeto produto inteiro aqui
        valueUnit: valor,
        quant: 1,
        subTotal: valor
    }

    cart.push(newItem);

    await saveCart(cart);

    return newItem;
}

export const quantInItemCart = async (itemId, op) => {
    
    const cart = await getCarrinho();

    const cartIndex = cart.findIndex(item => {
        return item.id === itemId
    });

    if( cartIndex != -1){
        const item = cart[cartIndex];

        if(op === '+') {
            item.quant++;
        } else {
            item.quant--;

            if(item.quant < 1){
                item.quant = 1;
            }
        }

        item.subTotal = item.valueUnit * item.quant;
    }

    await saveCart(cart);

    return cart
}