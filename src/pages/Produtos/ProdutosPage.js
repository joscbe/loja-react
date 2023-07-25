import { Container } from "react-bootstrap"
import { ListCard } from "../../components/Card/ListCard"
import { saveProductInCart } from "../../services/pinService"


export const ProdutosPage = () => {
    //saveProductInCart('123', 23.89);

    return (
        <Container fluid>
            <ListCard items={[
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_802877-MLB70584205682_072023-W.webp',
                    descricao: 'Chevrolet Prisma Sed. Ltz 1.4 8v Flexpower 4p Aut.',
                    valor: '79.900'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_799967-MLA70536532080_072023-W.webp',
                    descricao: 'Mercedes-benz Classe Cla Cla-200 Vision 1.6 Tb 16v Flex Aut.',
                    valor: '129.900'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
                {
                    image: 'https://http2.mlstatic.com/D_NQ_NP_727712-MLB70462375898_072023-W.webp',
                    descricao: 'Kia Sportage Sportage Lx 2.0 (flex) (aut) P578',
                    valor: '85.890'
                },
            ]} />
        </Container>
    )
}