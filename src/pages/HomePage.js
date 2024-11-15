import { Container, Stack } from "react-bootstrap";

import "styles/home/home.scss";

import GreetingRow from "components/home/sections/GreetingRow";
import AboutRow from "components/home/sections/AboutRow";
import PortfolioRow from "components/home/sections/PortfolioRow";
import ExperienceRow from "components/home/sections/ExperienceRow";
import TestimonialsRow from "components/home/sections/TestimonialsRow";

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