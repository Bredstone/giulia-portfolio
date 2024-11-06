import { Container, Row, Col, Stack } from "react-bootstrap";

import CircularText from "../components/CircularText";

export default function HomePage() {
    return (
        <Container className="home-content">
            <Row className="gap-4">
                <Col className="px-5 py-5 bg-secondary rounded-5 position-relative home-panel">
                    <h1 className="home-header"><span className="display-font">hi, i'm giulia!</span> ✨</h1>

                    <Stack gap={4}>
                        <h2 className="m-0">I’m a well-versed Product Designer with years of experience in tech.</h2>

                        <p className="m-0 subtitle">I've worked in small and big companies, on small and big projects, focused on making ideas come true in a user-friendly way.</p>

                        <Stack gap={5} direction="horizontal">
                            <a href="#" className="m-0 subtitle">👩‍💻 About Me</a>

                            <a href="#" className="m-0 subtitle">✏️ Selected Work</a>
                        </Stack>

                        <div className="w-100 h-100 d-flex flex-row align-items-end justify-content-end">
                            <h3 className="m-0"><a className="display-font" href="#">let's chat! →</a></h3>
                        </div>
                    </Stack>
                </Col>

                <Col xs={4} className="profile-picture rounded-5">
                    <CircularText />
                </Col>
            </Row>

            <Row className="content">
                Conteúdo
            </Row>
        </Container>
    );
}