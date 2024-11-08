import { Container, Stack } from "react-bootstrap";

import "../styles/home/home.scss";

import GreetingRow from "../components/HomePage/GreetingRow";
import AboutRow from "../components/HomePage/AboutRow";
import PortfolioRow from "../components/HomePage/PortfolioRow";
import ExperienceRow from "../components/HomePage/ExperienceRow";
import TestimonialsRow from "../components/HomePage/TestimonialsRow";

export default function HomePage() {
    return (
        <Container className="home-content">
            <Stack gap={4}>
                <GreetingRow />
                <AboutRow />
                <PortfolioRow />
                <ExperienceRow />
                <TestimonialsRow />
            </Stack>
        </Container>
    );
}