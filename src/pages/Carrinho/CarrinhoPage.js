import { Col, Container, Row } from "react-bootstrap"
import { ListCarrinhoContainer } from "../../containers/Carrinho/ListCarrinhoContainer"
import { ListResumoCompraContainer } from "../../containers/Carrinho/ListResumoCompraContainer"

export const CarrinhoPage = () => {

    return (
        <Container>
            <h1></h1>
            <Row>
                <Col md={8}>
                    <ListCarrinhoContainer />
                </Col>
                
                <Col>
                    <ListResumoCompraContainer />
                </Col>
            </Row>
        </Container>
    )
}