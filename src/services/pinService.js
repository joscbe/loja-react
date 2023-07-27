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

export const saveItemInCart = async (product) => {
    const cart = await getCarrinho();

    const newItem = {
        id: generateId(),
        product: product,
        quant: 1,
        subTotal: product.valor,
        frete: product.valor * 0.05
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

    if( cartIndex != -1 ){
        const item = cart[cartIndex];

        if(op === '+') {
            item.quant++;
        } else {
            item.quant--;

            if(item.quant < 1) {
                item.quant = 1;
            }
        }

        item.subTotal = item.product.valor * item.quant;
    }

    await saveCart(cart);

    return cart
}

export const removeItemInCart = async (itemId) => {
    const cart = await getCarrinho();
    var itemRemove = {};

    const cartIndex = cart.findIndex(item => {
        return item.id === itemId
    })

    if(cartIndex != -1) {
        itemRemove = cart[cartIndex];
        cart.splice(cartIndex, 1);
    }

    await saveCart(cart);

    return itemRemove;
}

export const getProducts = async () => {
    return [
        {
            id: '1',
            titulo: 'Chevrolet Prisma',
            ano: '2019 | 19.000 km',
            image: 'https://http2.mlstatic.com/D_NQ_NP_802877-MLB70584205682_072023-W.webp',
            descricao: 'Chevrolet Prisma Sed. Ltz 1.4 8v Flexpower 4p Aut.',
            local: 'São Paulo Zona Leste - São Paulo',
            valor: '79900'
        },
        {
            id: '2',
            titulo: 'Mercedes-benz Cla-200',
            ano: '2020 | 16.000 km',
            image: 'https://http2.mlstatic.com/D_NQ_NP_799967-MLA70536532080_072023-W.webp',
            descricao: 'Mercedes-benz Classe Cla Cla-200 Vision 1.6 Tb 16v Flex Aut.',
            local: 'São Paulo Zona Sul - São Paulo',
            valor: '129900'
        },
        {
            id: '3',
            titulo: 'Kia Sportage Lx',
            ano: '2021 | 22.000 km',
            image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
            descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
            local: 'São Paulo Zona Norte - São Paulo',
            valor: '85890'
        },
        {
            id: '4',
            titulo: 'Tapete Borracha Yaris',
            image: 'https://http2.mlstatic.com/D_NQ_NP_849841-MLB51752269710_092022-V.webp',
            descricao: 'Tapete Borracha Yaris Sedan/hatch Traseiro Inteiriço 2023',
            ano: '2020',
            local: 'Manaus Zona Leste - Amazonas',
            valor: '119.99'
        },
        {
            id: '5',
            titulo: 'Led Neon Rgb Luz Interno',
            image: 'https://http2.mlstatic.com/D_NQ_NP_986158-MLB48647638957_122021-V.webp',
            descricao: 'Led Neon Rgb Luz Interno C/controle Acessórios Carro Tuning',
            ano: '2020',
            local: 'Manaus Zona Leste - Amazonas',
            valor: '54.99'
        },
        {
            id: '6',
            titulo: 'Kit 10 Unidades Parafuso Arruela',
            image: 'https://http2.mlstatic.com/D_NQ_NP_788960-MLB54853338496_042023-V.webp',
            descricao: 'Kit 10 Unidades Parafuso Arruela Anodizadas M6x20 Jdm Fender',
            ano: '2020',
            local: 'Manaus Zona Norte - Amazonas',
            valor: '27.34'
        },
        {
            id: '7',
            titulo: 'Par Lampada Super Branca H11',
            image: 'https://http2.mlstatic.com/D_NQ_NP_732623-MLB30088302922_042019-V.webp',
            descricao: 'Par Lampada Super Branca H11 8500k Xenon 12v 55w Techone',
            ano: '2020',
            local: 'Manaus Zona Leste - Amazonas',
            valor: '31.58'
        },
        {
            id: '8',
            titulo: 'Capa Protetora Pet Banco',
            image: 'https://http2.mlstatic.com/D_NQ_NP_819662-MLB50312137552_062022-V.webp',
            descricao: 'Capa Protetora Pet Banco Carro Traseiro Cão Gato Impermeável',
            ano: '2020',
            local: 'Manaus Zona Sul - Amazonas',
            valor: '249'
        },
        {
            id: '9',
            titulo: 'Botão Adesivo Protetor',
            image: 'https://http2.mlstatic.com/D_NQ_NP_918440-MLB54099952228_032023-V.webp',
            descricao: 'Botão Adesivo Protetor Anti Impacto P/ Porta Do Carro 10 Pçs',
            ano: '2020',
            local: 'Manaus Zona Oeste - Amazonas',
            valor: '29.43'
        },
        {
            id: '10',
            titulo: 'Tapete Kombi Porta Malas',
            image: 'https://http2.mlstatic.com/D_NQ_NP_646527-MLB70200573138_062023-V.webp',
            descricao: 'Tapete Kombi Porta Malas Pvc Emborrachado 2001',
            ano: '2020',
            local: 'Manaus Zona Leste - Amazonas',
            valor: '131.99'
        },
        {
            id: '11',
            titulo: 'Grade Radiador Ranger Xl',
            image: 'https://http2.mlstatic.com/D_NQ_NP_900635-MLB69824067726_062023-V.webp',
            descricao: 'Grade Radiador Ranger Xl 2004 A 2009 Preta C/ Friso Cromado',
            ano: '2020',
            local: 'Manaus Zona Norte - Amazonas',
            valor: '396.85'
        },
    ]
}