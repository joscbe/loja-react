import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const HeaderPartial = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">AutoMarket</Navbar.Brand>
                <Nav className="">
                    <Link className='nav-link' to='/'>Produtos</Link>
                    <Link className='nav-link' to='/carrinho'>Carrinho</Link>
                </Nav>
            </Container>
      </Navbar>
    )
}