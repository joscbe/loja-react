import { useAppContext } from "../../store/AppContext";
import { Col, Row } from 'react-bootstrap';
import { ListGroup } from "../../components/ListGroup/ListGroup";
import Pagination from 'react-bootstrap/Pagination';
import ListGroupBS from 'react-bootstrap/ListGroup';
import { useEffect } from "react";
import { fetchCart, updateQuantSubItem, updateQuantUpItem } from "../../store/actions";


export const ListCarrinhoContainer = () => {
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        fetchCart(dispatch);
    }, [])

    const handleQuantUp = (itemId) => {
        updateQuantUpItem(itemId, dispatch);
    }

    const handleQuantSub = (itemId) => {
        updateQuantSubItem(itemId, dispatch);
    }

    return(
        <ListGroup title='PRODUTOS SELECIONADOS'>
            {state.cart.map((item, index) => (
                <ListGroupBS.Item
                as="li"
                className=""
                key={index}
            >
                <div className="ms-2">
                    <Row className='mt-3 mb-3'>
                        <Col>
                            <img src='https://http2.mlstatic.com/kit-04-shorts-tactel--bolso-masculino-coloridos-mauricinho-S_665159-MLB46890614418_072021-R.jpg' />
                        </Col>

                        <Col className='col-7'>
                            <div className='d-flex flex-column'>
                                <strong>Kit 04 Shorts Tactel Bolso Masculino</strong>
                                <small>Cor: Vermelha, Tamanho: M</small>
                            </div>
                        </Col>

                        <Col className='col-2 text-center'>
                            <Pagination size='sm'>
                                <Pagination.Item onClick={() => handleQuantSub(item.id)}>-</Pagination.Item>
                                <Pagination.Item disabled>{item.quant}</Pagination.Item>
                                <Pagination.Item onClick={() => handleQuantUp(item.id)}>+</Pagination.Item>
                            </Pagination>
                        </Col>

                        <Col className='text-end'>
                            <span className=''>R$ {Number.parseFloat(item.subTotal).toFixed(2)}</span>
                        </Col>
                    </Row>
                </div>
                
            </ListGroupBS.Item>
            ))}
            <ListGroupBS.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    Frete
                </div>
                R$ 12,60
            </ListGroupBS.Item>
        </ListGroup>
    )
}