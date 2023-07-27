import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

export const ButtonLoading = ({ loading, label, loadingLabel, ...buttonProps }) => {

    return (
        <Button {...buttonProps}>
            {loading && (
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            )}
            {loading ? ' '+loadingLabel : label}
        </Button>
    )
}