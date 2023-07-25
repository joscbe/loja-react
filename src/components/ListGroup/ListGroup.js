import ListGroupBS from 'react-bootstrap/ListGroup';

export const ListGroup = ({ children, title }) => {

    return (
        <ListGroupBS as="ol">
            <ListGroupBS.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{title}</div>
                </div>
            </ListGroupBS.Item>
                {children}
        </ListGroupBS>
    )
}