import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
            
        ]
    }
]);


function App() {
    return (
        <Container fluid className='p-0 d-flex flex-column vw-100 vh-100 overflow-x-hidden'>            
            <Header />
            <RouterProvider router={router} />
        </Container>
    );
}

export default App;
