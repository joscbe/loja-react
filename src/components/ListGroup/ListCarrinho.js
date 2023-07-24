import { Col, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';

export const ListCarrinho = ({items = []}) => {

    return (
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">PRODUTOS SELECIONADOS</div>
                </div>
            </ListGroup.Item>
            {items.map(item => (
                <ListGroup.Item
                as="li"
                className=""
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
                                <Pagination.Item>-</Pagination.Item>
                                <Pagination.Item disabled>{1}</Pagination.Item>
                                <Pagination.Item>+</Pagination.Item>
                            </Pagination>
                        </Col>

                        <Col className='text-end'>
                            <span className=''>R$ 10,00</span>
                        </Col>
                    </Row>
                </div>
                
            </ListGroup.Item>
            ))}
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    Frete
                </div>
                R$ 12,60
            </ListGroup.Item>
        </ListGroup>
    )
}