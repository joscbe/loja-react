import CardBS from 'react-bootstrap/Card';
import { ButtonLoading } from '../Button/ButtonLoading'

export const Card = ({ image, titulo, descricao, valor, ano, local, buttonLoading = {} }) => {

    return (
        <CardBS style={{ width: '18rem' }}>
            <CardBS.Img height='' className='image' variant="top" src={image} />
            <CardBS.Body className=''>
                <CardBS.Title className='mb-0'>R$ {valor}</CardBS.Title>
                <small>{ano}</small>

                <CardBS.Text className='mt-3'>
                    {descricao}
                </CardBS.Text>

                <small>{local}</small>

                <ButtonLoading 
                    className='w-100 mt-2' 
                    variant="primary" 
                    size="sm"
                    {...buttonLoading}
                />               
            </CardBS.Body>
        </CardBS>
    )
}