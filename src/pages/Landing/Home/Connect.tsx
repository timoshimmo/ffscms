import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

import imgConnectExp1 from "../../../assets/images/home/2025/img_connect_1.png";
import imgConnectExp2 from "../../../assets/images/home/2025/img_connect_2.png";
import imgConnectExp3 from "../../../assets/images/home/2025/img_connect_3.png";
import imgConnectExp4 from "../../../assets/images/home/2025/img_connect_4.png";

const Connect = () => {

    return (
        <React.Fragment>
            <section className="connect-section px-4">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-primary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>The Connect Experience</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-4 mt-1">
                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp1} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Next-Gen Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Next-Gen Banking</h1> 
                                        <p className='fs-15'>Explore the future of corporate banking, from Africa to global markets.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp2} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>AI & Open Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>AI & Open Banking</h1> 
                                        <p className='fs-15'>Explore the future of corporate banking, from Africa to global markets.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp3} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Innovation at the Top</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Innovation at the Top</h1> 
                                        <p className='fs-15'>Explore the future of corporate banking, from Africa to global markets.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                                <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp4} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Banking Meets Business</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Banking Meets Business</h1> 
                                        <p className='fs-15'>Explore the future of corporate banking, from Africa to global markets.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;