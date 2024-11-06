import { useRouteError } from "react-router-dom";

import { Container, Alert } from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container>
            <h1>Oops!</h1>
            <p>Desculpe, parece que um erro inesperado aconteceu...</p>
            <Alert variant='danger'>
                <Alert.Heading>{`Erro ${error.status} - ${error.statusText || error.message}`}</Alert.Heading>
                {error.data}
            </Alert>
        </Container>
    );
}