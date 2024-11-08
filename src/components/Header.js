import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

import "../styles/header.scss";

export default function Header() {
    return (
        <Navbar expand="xl" sticky="top" className="py-3 w-auto m-xl-auto">
            <Container className="py-1 rounded-5 header">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-body" />

                <Navbar.Offcanvas id='header-nav' aria-labelledby='header-nav'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='header-nav'>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">home</Nav.Link>
                            <Navbar.Text className="d-none d-xl-block">•</Navbar.Text>
                            <Nav.Link href="#about">about me</Nav.Link>
                            <Navbar.Text className="d-none d-xl-block">•</Navbar.Text>
                            <Nav.Link href="#work">selected work</Nav.Link>
                            <Navbar.Text className="d-none d-xl-block">•</Navbar.Text>
                            <Nav.Link href="#experience">experience</Nav.Link>
                            <Navbar.Text className="d-none d-xl-block">•</Navbar.Text>
                            <Nav.Link href="#contact">contact info</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
