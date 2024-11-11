import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Container fluid className='p-0 d-flex flex-column'>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

export default App;
