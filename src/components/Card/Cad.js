import CardBS from 'react-bootstrap/Card';

export const Card = ({ image, titulo, descricao, valor }) => {

    return (
        <CardBS style={{ width: '18rem' }}>
            <CardBS.Img variant="top" src={image} />
            <CardBS.Body className='text-start'>
                <CardBS.Title className='mb-0'>R$ {valor}</CardBS.Title>
                <small>2019 | 19.000 km</small>

                <CardBS.Text className='mt-3'>
                    {descricao}
                </CardBS.Text>

                <small>São Paulo Zona Leste - São Paulo</small>                
            </CardBS.Body>
        </CardBS>
    )
}