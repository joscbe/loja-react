import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
import { useAppContext } from '../../store/AppContext';

export const HeaderPartial = () => {
    const { state } = useAppContext();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">AutoMarket</Navbar.Brand>
                <Nav className="">
                    <Link className='nav-link' to='/'>Produtos</Link>
                    <Link className='nav-link' to='/carrinho'>
                        Carrinho <Badge bg="success">{state.cart.length}</Badge>
                    </Link>
                </Nav>
            </Container>
      </Navbar>
    )
}