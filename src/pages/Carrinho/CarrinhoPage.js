import { Col, Container, Row } from "react-bootstrap"
import { ListCarrinho } from "../../components/ListGroup/ListCarrinho"
import { ListPrecoTotal } from "../../components/ListGroup/ListPrecoTotal"


export const CarrinhoPage = () => {

    return (
        <Container>
            <h1>Carrinho</h1>
            <Row>
                <Col md={8}>
                    <ListCarrinho items={[{},{},{}]} />
                </Col>
                
                <Col>
                    <ListPrecoTotal />
                </Col>
            </Row>
        </Container>
    )
}