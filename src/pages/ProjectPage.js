import { Row, Col, Container, Stack, Button, Nav, Navbar } from "react-bootstrap";

import "../styles/project/project.scss";

export default function ProjectPage() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            {/* right-aligned navbar */}
            <Navbar className="navbar-right">
                <Nav.Link href="#overview">
                    <p>overview</p>
                    <span className="bullet" />
                </Nav.Link>

                <Nav.Link href="#challenges">
                    <p>challenges</p>
                    <span className="bullet" />
                </Nav.Link>

                <Nav.Link href="#wireframes">
                    <p>wireframes</p>
                    <span className="bullet" />
                </Nav.Link>

                <Nav.Link href="#tests">
                    <p>tests and validation</p>
                    <span className="bullet" />
                </Nav.Link>

                <Nav.Link href="#results">
                    <p>results</p>
                    <span className="bullet" />
                </Nav.Link>

                <Nav.Link href="#contact">
                    <p>contact</p>
                    <span className="bullet" />
                </Nav.Link>
            </Navbar>

            {/* page content */}
            <Container>
                <Stack gap={5}>
                    {/* title */}
                    <h1>Ades - a user-friendly digital signature platform.</h1>

                    {/* project details */}
                    <Row data-section id="overview" className="gap-4">
                        <Col xs={3} className="bg-secondary rounded-5 vertical-rectangle p-4">
                            <h3 className="display-font">project details</h3>
                        </Col>

                        <Col className="bg-secondary rounded-5">
                        </Col>
                    </Row>

                    {/* introduction and onverview */}
                    <Row className="gap-4 pt-3">
                        <Col className="bg-secondary rounded-5 introduction-panel">
                            <h3 className="display-font introduction-header">overview</h3>

                            <div className="d-flex flex-column gap-4">
                                <p className="subtitle">
                                    With the advance of information exchange in the digital realm, <b>data protection and security have become an increasing concern when creating interfaces.</b>
                                </p>
                                <p>
                                    However, a system's security requirements often manifest in ways that conflict with user needs. This was the issue that my client, a Computer Security lab, seldom faced, and what motivated them to initiate this project with me.
                                    They had developed a new technology for digital signing, and wanted to materialize and put it to test through a brand-new <b>digital signature platform.</b>
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <h2 className="text-center">“We need to develop a web-based, digital signature platform, that is easy to use, even with complex functionatilities.”</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="bg-secondary p-4 rounded-5 viewport-panel d-flex flex-column align-items-start justify-content-end">
                            <Button className="results-button rounded-5 fs-5">
                                Click here if you want to go straight to the results!
                            </Button>
                        </Col>
                    </Row>

                    {/* challenges */}
                    <Row data-section id="challenges" className="py-4 gap-4">
                        <Col xs={3}>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <h3 className="display-font">discovering the challenges</h3>
                            </div>
                        </Col>

                        <Col>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <p>My client had an extensive knowledge about the internal, technological functioning of most of the state-of-the-art competitors for their product, and had a firm belief that what they had come up with was unique and better for the end user.  Even so, they lacked information about what the user experience was in other platforms, what were the user's pains and needs, and how could they do better.</p>
                            </div>
                        </Col>
                    </Row>

                    <div>
                        <Row className="gap-4 mb-4">
                            <Col className="bg-secondary rounded-5 square">
                            </Col>

                            <Col className="bg-secondary rounded-5 square">
                            </Col>

                            <Col className="bg-secondary rounded-5 square">
                            </Col>
                        </Row>

                        <Row>
                            <Col className="bg-secondary rounded-5 horizontal-rectangle-dense">
                            </Col>
                        </Row>
                    </div>

                    {/* wireframes */}
                    <Row data-section id="wireframes" className="py-4 gap-4">
                        <Col xs={3}>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <h3 className="display-font">wireframes</h3>
                            </div>
                        </Col>

                        <Col>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <p>The data from the discovery stage was essential for establishing the first iteration of prototypes and user flows, in a low-fidelity manner.  These wireframes described the flows for signing a document digitally, and were tested for possible usability issues, and to validate the suppositions that were made so far.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gap-4">
                        <Col className="bg-secondary rounded-5">
                        </Col>

                        <Col>
                            <Row>
                                <Col className="bg-secondary rounded-5 square mb-4">
                                </Col>
                            </Row>

                            <Row>
                                <Col className="bg-secondary rounded-5 square">
                                </Col>
                            </Row>
                        </Col>

                        <Col className="bg-secondary rounded-5">
                        </Col>
                    </Row>

                    {/* tests and validation */}
                    <Row data-section id="tests" className="gap-4">
                        <Col>
                            <div className="w-100 h-100 d-flex flex-column gap-4 justify-content-center">
                                <h3 className="display-font">tests and validation</h3>
                                <p>The wireframes underwent validation through a usability test, executed by a focal group; there were nine participants, divided in two groups of four and five people, each with a smartphone device containing the prototypes.</p>
                                <p>This test was essential to validate the general navigation of the interface, as well as the disposition of elements and functionalities and their ease-of-use. The participants were encouraged to use the think-out-loud method to reach conclusions among the group, and they received paper and pens to take notes of their perceptions.</p>
                                <p>After both groups finished their flows, the table discussed their thoughts and conclusions on what parts they liked and disliked the most. This input was essential in forming the final solution, as it helped lapidate the best course of action in terms of interaction and navigation.</p>
                            </div>
                        </Col>

                        <Col>
                            <Row className="gap-4">
                                <Col className="bg-secondary rounded-5 square mb-4">
                                </Col>

                                <Col className="bg-secondary rounded-5 square mb-4">
                                </Col>
                            </Row>

                            <Row>
                                <Col className="bg-secondary rounded-5 horizontal-rectangle">
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </>
    );
}