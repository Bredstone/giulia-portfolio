import { Row } from "react-bootstrap";

import AppleEmoji from "../AppleEmoji";

import TestimonialsCarousel from "../TestimonialsCarousel";

export default function TestimonialsRow() {
    return (
        <>
            {/* section title */}
            <Row>
                <h3 className="p-0 display-font">what other people say <AppleEmoji name="speech-balloon" className="ms-4" /></h3>
            </Row>

            <TestimonialsCarousel />
        </>
    );
}