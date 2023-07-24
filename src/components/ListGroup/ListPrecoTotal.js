import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const ListPrecoTotal = () => {

    return (
        <ListGroup as="ol">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Resumo da Compra</div>
                </div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className=""
            >
                <div className="d-flex justify-content-between align-items-start mt-3">
                    <div className="ms-2">
                        Produtos (2)
                    </div>
                    <span>R$ 10,00</span>
                </div>

                <div className="d-flex justify-content-between align-items-start mt-1">
                    <div className="ms-2">
                        Frete
                    </div>
                    <span>R$ 19,90</span>
                </div>

                <div className="d-flex justify-content-between align-items-start mt-5 fw-bold">
                    <div className="ms-2">
                        Total
                    </div>
                    <span>R$ 29,90</span>
                </div>

                <Button variant="primary" className='mt-3 mb-3 p-3 w-100 fw-bold'>Finalizar Compras</Button>
            </ListGroup.Item>
        </ListGroup>
    )
}