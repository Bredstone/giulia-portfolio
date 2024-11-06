import { Row, Col } from "react-bootstrap";

import adesThumbnail from "../../resources/img/adesThumbnail.jpg";
// import s4eThumbnail from "../../resources/img/s4eThumbnail.jpg";
import findiThumbnail from "../../resources/img/findiThumbnail.jpg";
// import samsungThumbnail from "../../resources/img/samsungThumbnail.jpg";

import PortfolioThumbnail from "../Thumbnail";

export default function PortfolioRow() {
    return (
        <>
            {/* section title */}
            <Row id="work">
                <h3 className="display-font">selected work</h3>
            </Row>

            {/* section content */}
            <Row className="gap-4">
                <PortfolioThumbnail xs={4} backgroundImage={adesThumbnail} />

                <Col>
                    <Row className="gap-4 mb-4">
                        <PortfolioThumbnail square />

                        <PortfolioThumbnail square backgroundImage={findiThumbnail} />
                    </Row>

                    <Row>
                        <PortfolioThumbnail rectangle />
                    </Row>
                </Col>
            </Row>
        </>
    );
}