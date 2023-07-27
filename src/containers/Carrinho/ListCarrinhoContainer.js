import { useAppContext } from "../../store/AppContext";
import { Col, Row } from 'react-bootstrap';
import { ListGroup } from "../../components/ListGroup/ListGroup";
import Pagination from 'react-bootstrap/Pagination';
import ListGroupBS from 'react-bootstrap/ListGroup';
import { useEffect } from "react";
import { fetchCart, removeItemInCartAction, updateQuantSubItem, updateQuantUpItem } from "../../store/actions";



export const ListCarrinhoContainer = () => {
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        fetchCart(dispatch);
    }, [])

    const handleTotalFrete = () => {
        var totalFrete = 0;

        state.cart.map(item => {
            totalFrete += item.frete;
        });

        return Number.parseFloat(totalFrete).toFixed(2);
    }

    const handleQuantUp = (itemId) => {
        updateQuantUpItem(itemId, dispatch);
    }

    const handleQuantSub = (itemId) => {
        updateQuantSubItem(itemId, dispatch);
    }

    const handleRemoveItem = async (itemId) => {
        await removeItemInCartAction(itemId, dispatch);
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
                            <img width={75} src={item.product.image} />
                        </Col>

                        <Col className='col-7'>
                            <div className='d-flex flex-column'>
                                <strong>{String(item.product.titulo).toUpperCase()}</strong>
                                <small>{item.product.descricao}</small>
                                <a className="link-offset-2 link-underline link-underline-opacity-0" onClick={() => handleRemoveItem(item.id)} href="#">Excluir</a>
                            </div>
                        </Col>

                        <Col className='col-auto text-center'>
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
                R$ {handleTotalFrete()}
            </ListGroupBS.Item>
        </ListGroup>
    )
}