import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

import imgViews1 from "../../../assets/images/home/2025/img_views_1.png";
import imgViews2 from "../../../assets/images/home/2025/img_views_2.png";
import imgViews3 from "../../../assets/images/home/2025/img_views_3.png";
import imgViews4 from "../../../assets/images/home/2025/img_views_4.png";
import imgViews5 from "../../../assets/images/home/2025/img_views_5.png";
import imgViews6 from "../../../assets/images/home/2025/img_views_6.png";

import imgViews7 from "../../../assets/images/home/2025/img_views_7.png";
import imgViews8 from "../../../assets/images/home/2025/img_views_8.png";
import imgViews9 from "../../../assets/images/home/2025/img_views_9.png";

const Views = () => {

    return (
        <React.Fragment>
            <section className="views-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-primary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Views From 2024</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="views-2025-web">
                        <Col lg={12} sm={12}>
                            <div className="grid-style-1">
                                <img src={imgViews1} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews2} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews3} alt="" className="w-100 rounded-4 views-imgs-style" />
                            </div>

                            <div className="grid-style-2">
                                <img src={imgViews4} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews5} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews6} alt="" className="w-100 rounded-4 views-imgs-style" />
                            </div>

                              <div className="grid-style-3">
                                <img src={imgViews7} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews8} alt="" className="w-100 rounded-4 views-imgs-style" />
                                <img src={imgViews9} alt="" className="w-100 rounded-4 views-imgs-style" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="views-2025-mobile">
                        <Col lg={12} sm={12}>
                            <div className="w-full">
                                <img src={imgViews1} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews2} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews3} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews4} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews5} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews6} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews7} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews8} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                                <img src={imgViews9} alt="" className="w-100 rounded-4 views-imgs-style mb-5" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Views;