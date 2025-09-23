import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

import imgAttends1 from "../../../assets/images/home/2025/img_attends_1.png";
import imgAttends2 from "../../../assets/images/home/2025/img_attends_2.png";
import imgAttends3 from "../../../assets/images/home/2025/img_attends_3.png";
import imgAttends4 from "../../../assets/images/home/2025/img_attends_4.png";
import imgAttends5 from "../../../assets/images/home/2025/img_attends_5.png";
import imgAttends6 from "../../../assets/images/home/2025/img_attends_6.png";


const WhoAttends = () => {

    return (
        <React.Fragment>
            <section className="views-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-primary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Who Should Attend FFS <span className='text-secondary'>2.0</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="who-attends-web">
                        <Col lg={12} sm={12}>
                            <div className="attends-grid-style">
                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>C-Suite Executives</h6>
                                        <p className='text-white fs-13 mt-5'>Leaders managing capital, liquidity, and growth strategies, seeking actionable insights and future-ready banking solutions.</p>
                                    </div>
                                    <img src={imgAttends1} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Corporate CFOs, Treasurers, and Business Heads</h6>
                                        <p className='text-white fs-13 mt-5'>Finance leaders shaping strategy and growth. Connect with peers, explore new models for corporate banking, and gain insights to strengthen treasury and business operations.</p>
                                    </div>
                                    <img src={imgAttends2} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Regulators and Policymakers</h6>
                                        <p className='text-white fs-13 mt-5'>Policy drivers and governance leaders engaging with industry stakeholders to shape the future of financial services.</p>
                                    </div>
                                    <img src={imgAttends3} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>
                            </div>
                        </Col>
                         <Col lg={12} sm={12}>
                            <div className="attends-grid-style mt-5">
                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Fintechs and Technology Providers</h6>
                                        <p className='text-white fs-13 mt-5'>Innovators building next-generation platforms, partnerships, and solutions that redefine corporate and transaction banking.</p>
                                    </div>
                                    <img src={imgAttends4} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Investors, DFIs, and Analysts</h6>
                                        <p className='text-white fs-13 mt-5'>Capital providers and market watchers discovering opportunities, trends, and investment pathways in financial services.</p>
                                    </div>
                                    <img src={imgAttends5} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Associations, Consultants, and Media</h6>
                                        <p className='text-white fs-13 mt-5'>Industry enablers and storytellers capturing, analysing, and amplifying the latest developments in banking and finance.</p>
                                    </div>
                                    <img src={imgAttends6} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="who-attends-mobile">
                        <Col lg={12} sm={12}>
                            <div className="w-full">
                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>C-Suite executives from banks, corporates, and financial institutions</h6>
                                        <p className='text-white fs-13 mt-4'>Decision-makers shaping corporate banking. A space to connect with peers, share strategies, and unlock opportunities in the evolving financial ecosystem.</p>
                                    </div>
                                    <img src={imgAttends1} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Corporate CFOs, Treasurers, Business Heads</h6>
                                        <p className='text-white fs-13 mt-4'>Finance leaders shaping strategy and growth. Connect with peers, explore new models for corporate banking, and gain insights to strengthen treasury and business operations.</p>
                                    </div>
                                    <img src={imgAttends2} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Regulators and policymakers</h6>
                                        <p className='text-white fs-13 mt-4'>Leaders driving policy and governance. Engage in strategic discussions that balance innovation, regulation, and financial inclusion.</p>
                                    </div>
                                    <img src={imgAttends3} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Fintechs and technology providers</h6>
                                        <p className='text-white fs-13 mt-4'>Innovators building the future of finance. Showcase solutions, explore partnerships, and align with industry leaders to scale impact.</p>
                                    </div>
                                    <img src={imgAttends4} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Investors, DFIs, and analysts</h6>
                                        <p className='text-white fs-13 mt-4'>Capital providers and market watchers. Discover new opportunities, evaluate emerging models, and connect with the next wave of growth in finance.</p>
                                    </div>
                                    <img src={imgAttends5} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>

                                <div className="border-bottom border-white attends-item mb-5">
                                    <div className="pt-3 px-3 attends-hover">
                                        <h6 className='text-white fw-bold fs-16' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Associations, consultants, and media</h6>
                                        <p className='text-white fs-13 mt-4'>Industry enablers and storytellers. Gain first-hand insights, shape narratives, and bridge the gap between stakeholders across the financial landscape.</p>
                                    </div>
                                    <img src={imgAttends6} alt="" className="w-100 rounded-3 attends-imgs-style" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default WhoAttends;