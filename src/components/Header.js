import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar expand="lg" sticky="top" className="py-3 w-auto m-auto header">
            <Container className="py-1 bg-body rounded-5">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">home</Nav.Link>
                        <Navbar.Text>•</Navbar.Text>
                        <Nav.Link href="#about">about me</Nav.Link>
                        <Navbar.Text>•</Navbar.Text>
                        <Nav.Link href="#work">selected work</Nav.Link>
                        <Navbar.Text>•</Navbar.Text>
                        <Nav.Link href="#contact">contact info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
