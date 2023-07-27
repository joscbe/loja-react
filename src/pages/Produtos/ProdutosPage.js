import { Container } from "react-bootstrap"
import { ListCard } from "../../containers/Produtos/ListCard"
import { useEffect } from "react"
import { useAppContext } from "../../store/AppContext"
import { fetchCart, fetchProductsAction } from "../../store/actions"

export const ProdutosPage = () => {
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        fetchCart(dispatch);
        fetchProductsAction(dispatch);
    }, [])

    return (
        <Container fluid>
            <ListCard items={state.products} />
        </Container>
    )
}