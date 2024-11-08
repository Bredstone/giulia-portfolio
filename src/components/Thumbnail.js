import { useState } from 'react';
import { Col, Collapse, Badge } from "react-bootstrap";

export default function PortfolioThumbnail({ xs, square, rectangle, backgroundImage, title, subtitle, year, badges }) {
    const [open, setOpen] = useState(false);

    return (
        <Col xs={xs}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className={`bg-secondary rounded-4 portfolio-thumbnail ${(square && 'square') || ''} ${(rectangle && 'horizontal-rectangle') || ''}`}
            onMouseEnter={() => { setOpen(true); }}
            onMouseLeave={() => { setOpen(false); }}>
            <div className="w-100 h-100 d-flex flex-column px-2 py-3 justify-content-end z-1 position-relative text-white">
                <div className="w-100 d-flex flex-row justify-content-between align-items-end">
                    <span>
                        <b>{title}</b>
                        <Collapse in={open}>
                            <div>
                                <p className={(subtitle && 'pt-1') || ''}>{subtitle}</p>
                                <div className={`d-flex flex-row flex-wrap gap-2 w-75 ${(badges && 'pt-1') || ''}`}>
                                    {badges.map(badge => <Badge key={badge} pill bg='secondary'>{badge}</Badge>)}
                                </div>
                            </div>
                        </Collapse>
                    </span>

                    <p>{year}</p>
                </div>
            </div>
        </Col>
    );
}