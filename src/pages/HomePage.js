import { Container, Stack, Row } from "react-bootstrap";

import "../styles/home.scss";

import GreetingRow from "../components/HomePage/GreetingRow";
import AboutRow from "../components/HomePage/AboutRow";
import PortfolioRow from "../components/HomePage/PortfolioRow";

export default function HomePage() {
    return (
        <Container className="home-content">
            <Stack gap={4}>
                <GreetingRow />
                <AboutRow />
                <PortfolioRow />

                <Row className="content">
                    Conteúdo
                </Row>
            </Stack>
        </Container>
    );
}