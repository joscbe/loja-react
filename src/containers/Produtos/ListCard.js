import { Col, Container, Row } from "react-bootstrap"
import { Card } from "../../components/Card/Cad"
import { useAppContext } from "../../store/AppContext"
import { useState } from "react";
import { saveItemInCartAction } from "../../store/actions";

export const ListCard = ({ items = [] }) => {
    const {state, dispatch} = useAppContext();
    const [ itemsLoading, setItemsLoading ] = useState({});

    const itemNormalized = items.map((item, index) => {
        return ({
            ...item,
            saved: state.cart.find(obj => obj.product.id === item.id)
        })
    })

    const handleClick = async (item) => {
        setItemsLoading((prevState) => {
            return {
                ...prevState,
                [item.id]: true
            }
        })

        await saveItemInCartAction(dispatch, item);

        setItemsLoading((prevState) => {
            return {
                ...prevState,
                [item.id]: false
            }
        })
    }

    return (
        <Container className="">
            <Row className="mb-3">
                {itemNormalized.map((item, index) => (
                    <Col key={index} xs={12} md={3} className="mt-3">
                        <Card 
                            image={item.image} 
                            descricao={item.descricao} 
                            valor={item.valor} 
                            ano={item.ano}
                            local={item.local}
                            buttonLoading={{
                                label: item.saved ? 'Adicionado' : 'Adicionar ao carrinho',
                                variant: item.saved ? 'secondary' : 'primary',
                                loading: itemsLoading[item.id],
                                loadingLabel: 'Adicionando...',
                                onClick: () => {handleClick(item)},
                                disabled: item.saved
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}