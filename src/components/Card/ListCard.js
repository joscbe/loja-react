import { Col, Container, Row } from "react-bootstrap"
import { Card } from "./Cad"


export const ListCard = ({ items = [] }) => {

    return (
        <Container>
            <Row className="mb-3">
                {items.map(item => (
                    <Col xs={12} md={3} className="mt-3">
                        <Card image={item.image} descricao={item.descricao} valor={item.valor} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}