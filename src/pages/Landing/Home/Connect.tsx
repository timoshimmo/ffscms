import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

import imgConnectExp1 from "../../../assets/images/home/2025/img_connect_1.png";
import imgConnectExp2 from "../../../assets/images/home/2025/img_connect_2.png";
import imgConnectExp3 from "../../../assets/images/home/2025/img_connect_3.png";
//import imgConnectExp4 from "../../../assets/images/home/2025/img_connect_4.png";

const Connect = () => {

    return (
        <React.Fragment>
            <section className="connect-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-primary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS 2.0 Summit Themes</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4 mt-1">
                        <Col lg={4} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp1} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Digital Transformation in Corporate & Transaction Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Digital Transformation in Corporate & Transaction Banking</h1> 
                                        <p className='fs-15'>Modernising cores, digitising trade and lending, and embedding services through APIs that plug directly into client workflows – driving efficiency, speed, and new distribution models.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp2} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>AI & the Future of Corporate & Transaction Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>AI & the Future of Corporate & Transaction Banking</h1> 
                                        <p className='fs-15'>AI is shifting from hype to impact. From risk detection and forecasting to CFO and treasury insights, trusted and explainable AI is reshaping how corporates and banks operate.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp3} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Global Payments & Treasury</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Global Payments & Treasury</h1> 
                                        <p className='fs-15'>Cross-border settlement, liquidity, ISO 20022, stablecoins, and tokenised deposits – the new rails powering certainty, speed, and control in global transaction banking.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/*<Col lg={3} sm={12}>
                                <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp4} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Banking Meets Business</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Banking Meets Business</h1> 
                                        <p className='fs-15'>Provide a platform for strategic discussions between banks, corporates, regulators, and fintechs.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>*/}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;