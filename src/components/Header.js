import { useState } from "react";
import { Nav, Navbar, Offcanvas, Collapse } from "react-bootstrap";
import { useLocation } from 'react-router-dom'

import "../styles/header.scss";

export default function Header() {
    const location = useLocation();
    const [backButton, setBackButton] = useState(location.pathname !== '/');

    return (
        <Navbar expand="xl" sticky="top" className='py-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-body" />

            <Navbar.Offcanvas id='header-nav' aria-labelledby='header-nav'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='header-nav'>
                        Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className={`bg-body px-4 py-1 header rounded-5 ${(location.pathname !== '/' && 'back-button') || ''}`}>
                        <Nav.Link className="d-flex flex-row" href="#home">
                            <Collapse in={backButton} dimension='width'>
                                <p>&lt; back to&nbsp;</p>
                            </Collapse>
                            <p>home</p>
                        </Nav.Link>
                        <Collapse timeout={600} in={location.pathname === '/'} onExited={() => setBackButton(true)} onEnter={() => setBackButton(false)} dimension="width">
                            <div>
                                <Navbar.Text className="d-none d-xl-inline-block">•</Navbar.Text>
                                <Nav.Link href="#about">about me</Nav.Link>
                                <Navbar.Text className="d-none d-xl-inline-block">•</Navbar.Text>
                                <Nav.Link href="#work">selected work</Nav.Link>
                                <Navbar.Text className="d-none d-xl-inline-block">•</Navbar.Text>
                                <Nav.Link href="#experience">experience</Nav.Link>
                                <Navbar.Text className="d-none d-xl-inline-block">•</Navbar.Text>
                                <Nav.Link href="#contact">contact info</Nav.Link>
                            </div>
                        </Collapse>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}
