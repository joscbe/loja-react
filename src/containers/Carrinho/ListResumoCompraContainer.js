import { ListGroup } from "../../components/ListGroup/ListGroup"
import ListGroupBS from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useAppContext } from "../../store/AppContext";


export const ListResumoCompraContainer = () => {
    const {state} = useAppContext();

    const calculaSubTotal = () => {
        var subTotal = 0;

        state.cart.map((item, index)=> {
            subTotal += Number.parseFloat(item.subTotal);
        })

        return subTotal.toFixed(2);
    }

    return (
        <ListGroup title='Resumo da Compra'>
            <ListGroupBS.Item
                as="li"
                className=""
            >
                <div className="d-flex justify-content-between align-items-start mt-3">
                    <div className="ms-2">
                        Produtos ({state.cart.length})
                    </div>
                    <span>R$ {calculaSubTotal()}</span>
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
            </ListGroupBS.Item>
        </ListGroup>
    )
}