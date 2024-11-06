import { Col } from "react-bootstrap";

export default function PortfolioThumbnail({ xs, square, rectangle, backgroundImage }) {
    return (
        <Col xs={xs}
            style={{backgroundImage: `url(${backgroundImage})`}} 
            className={`bg-secondary rounded-4 portfolio-thumbnail ${(square && 'square') || ''} ${(rectangle && 'horizontal-rectangle') || ''}`}>
            <div className="w-100 h-100 d-flex flex-column p-3 justify-content-end z-1 position-relative text-white">
                <b>Ades - Digital Signature Platform</b>
            </div>
        </Col>
    );
}