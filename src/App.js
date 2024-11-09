import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Container fluid className='p-0 d-flex flex-column vw-100 vh-100 overflow-x-hidden'>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

export default App;
