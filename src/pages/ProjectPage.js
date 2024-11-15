import { useState, useEffect } from "react";
import { Row, Col, Container, Stack, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import useDetectScroll from '@smakss/react-scroll-direction';
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import "styles/project/project.scss";

// import researchVideo1 from "../resources/video/ades/research1.mp4";
// import researchVideo2 from "../resources/video/ades/research2.mp4";

import introductionImg from "../resources/img/ades/introduction.png";
import overviewImg from "../resources/img/ades/overview.png";

import wireframesImg2 from "../resources/img/ades/wireframes2.png";
import wireframesImg3 from "../resources/img/ades/wireframes3.png";
import wireframesImg4 from "../resources/img/ades/wireframes4.png";

import testsImg1 from "../resources/img/ades/tests1.jpg";
import testsImg2 from "../resources/img/ades/tests2.jpg";
import testsImg3 from "../resources/img/ades/tests3.jpg";

import IndexNavBar from "components/project/IndexNav";

export default function ProjectPage() {
    const { ref: overviewRef, inView: overviewInView } = useInView({ rootMargin: "-20% 0px -30% 0px" });
    const { ref: challengesRef, inView: challengesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: wireframesRef, inView: wireframesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: testsRef, inView: testsInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: resultsRef, inView: resultsInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: contactRef, inView: contactInView } = useInView({ rootMargin: "10% 0px -30% 0px" });

    const [activeSection, setActiveSection] = useState();
    const { scrollDir } = useDetectScroll();

    useEffect(() => {
        if (scrollDir === "down") {
            if (contactInView) setActiveSection(5);
            else if (resultsInView) setActiveSection(4);
            else if (testsInView) setActiveSection(3);
            else if (wireframesInView) setActiveSection(2);
            else if (challengesInView) setActiveSection(1);
            else if (overviewInView) setActiveSection(0);
        } else {
            if (overviewInView) setActiveSection(0);
            else if (challengesInView) setActiveSection(1);
            else if (wireframesInView) setActiveSection(2);
            else if (testsInView) setActiveSection(3);
            else if (resultsInView) setActiveSection(4);
            else if (contactInView) setActiveSection(5);
        }
    }, [contactInView, resultsInView, testsInView, wireframesInView, challengesInView, overviewInView, scrollDir]);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            {/* right-aligned navbar */}
            <IndexNavBar
                sectionList={[
                    { title: 'overview', href: '#overview' },
                    { title: 'challenges', href: '#challenges' },
                    { title: 'wireframes', href: '#wireframes' },
                    { title: 'tests and validation', href: '#tests' },
                    { title: 'results', href: '#results' },
                    { title: 'contact', href: '#contact' },
                ]}
                activeSection={activeSection} />

            {/* page content */}
            <Container>
                <Stack gap={5}>
                    <div ref={overviewRef} className="d-flex flex-column gap-5">
                        {/* title */}
                        <h1>Ades - a user-friendly digital signature platform.</h1>

                        {/* project details */}
                        <Row id="overview" className="gap-4">
                            <Col className="rounded-5 shadow-sm parallax">
                                <ParallaxBanner className="h-100">
                                    <ParallaxBannerLayer speed={-10}>
                                        <img src={introductionImg} alt="ADES - Advanced Digital Signature Platform" />
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>
                            </Col>

                            <Col xs={3} className="bg-secondary rounded-5 p-4">
                                <div className="w-100 h-100 d-flex flex-column gap-4">
                                    <h2 className="display-font">project details</h2>

                                    <span>
                                        <p className="annotations">Company</p>
                                        <p>Laboratory of Computer Security (LabSEC - UFSC)</p>
                                    </span>

                                    <span>
                                        <p className="annotations">Timeline</p>
                                        <p>April - December 2023</p>
                                    </span>

                                    <span>
                                        <p className="annotations">Role and Activities</p>
                                        <p>For this project, I handled the full journey of exploration, research, prototyping, testing and documentation. As the only Designer, I wore many hats, helping with requirements and specifications for developers.</p>
                                    </span>
                                </div>
                            </Col>
                        </Row>

                        {/* introduction and overview */}
                        <Row className="gap-4 pt-3">
                            <Col className="bg-secondary rounded-5 introduction-panel">
                                <h3 className="display-font introduction-header">overview</h3>

                                <div className="d-flex flex-column gap-4">
                                    <p className="subtitle">
                                        With the advance of information exchange in the digital realm, <b>data protection and security have become an increasing concern when creating interfaces.</b>
                                    </p>
                                    <p>
                                        However, a system's security requirements often manifest in ways that conflict with user needs. This was the issue that my client, a Computer Security lab, seldom faced, and what motivated them to initiate this project with me.
                                        They had developed a new technology for digital signing, and wanted to materialize and put it to test through a brand-new <b>digital signature platform.</b>
                                    </p>
                                </div>
                            </Col>

                            <Col>
                                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                    <h2 className="text-center">“We need to develop a web-based, digital signature platform, that is easy to use, even with complex functionatilities.”</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="p-0 rounded-5 viewport-panel parallax position-relative shadow-sm">
                                <ParallaxBanner className="h-100">
                                    <ParallaxBannerLayer speed={-15}>
                                        <img src={overviewImg} alt="ADES - Advanced Digital Signature Platform" />
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>

                                <Button className="results-button rounded-5 fs-5">
                                    Click here if you want to go straight to the results!
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    {/* challenges */}
                    <Row ref={challengesRef} id="challenges" className="py-4 gap-4">
                        <Col xs={3}>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <h3 className="display-font">discovering the challenges</h3>
                            </div>
                        </Col>

                        <Col>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <p>My client had an extensive knowledge about the internal, technological functioning of most of the state-of-the-art competitors for their product, and had a firm belief that what they had come up with was unique and better for the end user.  Even so, they lacked information about what the user experience was in other platforms, what were the user's pains and needs, and how could they do better.</p>
                            </div>
                        </Col>
                    </Row>

                    <div>
                        <Row className="gap-4 mb-4">
                            <Col className="bg-secondary rounded-5 video">
                                {/* <video autoPlay muted loop>
                                    <source src={researchVideo1} type="video/mp4" />
                                </video> */}
                            </Col>

                            <Col className="bg-secondary rounded-5 video">
                                {/* <video autoPlay muted loop>
                                    <source src={researchVideo2} type="video/mp4" />
                                </video> */}
                            </Col>

                            <Col className="bg-secondary rounded-5 p-5">
                                <div className="w-100 h-100 d-flex flex-column align-items center justify-content-center gap-4">
                                    <p>After analyzing more than 8 similar products and over 200 answers from potential users, it was possible to define the most important aspects and functionalities for the projects MVP.</p>
                                    <p>This research was also beneficial for the client and their development team, and was presented to them as one of the project’s deliverables.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="bg-secondary rounded-5 horizontal-rectangle-dense">
                            </Col>
                        </Row>
                    </div>

                    {/* wireframes */}
                    <Row ref={wireframesRef} id="wireframes" className="py-4 gap-4">
                        <Col xs={3}>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <h3 className="display-font">wireframes</h3>
                            </div>
                        </Col>

                        <Col>
                            <div className="w-100 h-100 d-flex align-items-center">
                                <p>The data from the discovery stage was essential for establishing the first iteration of prototypes and user flows, in a low-fidelity manner.  These wireframes described the flows for signing a document digitally, and were tested for possible usability issues, and to validate the suppositions that were made so far.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gap-4">
                        <Col className="bg-secondary rounded-5">
                        </Col>

                        <Col>
                            <Row>
                                <Col className="bg-secondary rounded-5 square mb-4 parallax shadow-sm">
                                    <ParallaxBanner className="h-100">
                                        <ParallaxBannerLayer speed={-10}>
                                            <img src={wireframesImg2} />
                                        </ParallaxBannerLayer>
                                    </ParallaxBanner>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="bg-secondary rounded-5 square parallax shadow-sm">
                                    <ParallaxBanner className="h-100">
                                        <ParallaxBannerLayer speed={-10}>
                                            <img src={wireframesImg3} />
                                        </ParallaxBannerLayer>
                                    </ParallaxBanner>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={5} className="rounded-5 parallax shadow-sm">
                            <ParallaxBanner className="h-100">
                                <ParallaxBannerLayer speed={-10}>
                                    <img src={wireframesImg4} />
                                </ParallaxBannerLayer>
                            </ParallaxBanner>
                        </Col>
                    </Row>

                    {/* tests and validation */}
                    <Row ref={testsRef} id="tests" className="gap-4">
                        <Col>
                            <div className="w-100 h-100 d-flex flex-column gap-4 justify-content-center">
                                <h3 className="display-font">tests and validation</h3>
                                <p>The wireframes underwent validation through a usability test, executed by a focal group; there were nine participants, divided in two groups of four and five people, each with a smartphone device containing the prototypes.</p>
                                <p>This test was essential to validate the general navigation of the interface, as well as the disposition of elements and functionalities and their ease-of-use. The participants were encouraged to use the think-out-loud method to reach conclusions among the group, and they received paper and pens to take notes of their perceptions.</p>
                                <p>After both groups finished their flows, the table discussed their thoughts and conclusions on what parts they liked and disliked the most. This input was essential in forming the final solution, as it helped lapidate the best course of action in terms of interaction and navigation.</p>
                            </div>
                        </Col>

                        <Col>
                            <Row className="gap-4">
                                <Col className="rounded-5 square mb-4 parallax shadow-sm">
                                    <ParallaxBanner className="h-100">
                                        <ParallaxBannerLayer speed={-10}>
                                            <img src={testsImg1} />
                                        </ParallaxBannerLayer>
                                    </ParallaxBanner>
                                </Col>

                                <Col className="rounded-5 square mb-4 parallax shadow-sm">
                                    <ParallaxBanner className="h-100">
                                        <ParallaxBannerLayer speed={-10}>
                                            <img src={testsImg2} />
                                        </ParallaxBannerLayer>
                                    </ParallaxBanner>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="rounded-5 horizontal-rectangle parallax shadow-sm">
                                    <ParallaxBanner className="h-100">
                                        <ParallaxBannerLayer speed={-10}>
                                            <img src={testsImg3} />
                                        </ParallaxBannerLayer>
                                    </ParallaxBanner>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </>
    );
}