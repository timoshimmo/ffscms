import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { numbersData } from '../../../common/data';
import { Link } from 'react-router-dom';

//import ic_youtube from "../../../assets/images/home/ic_youtube.png";
//import ic_linkedin from "../../../assets/images/home/ic_linkedin.png";
//import ic_x from "../../../assets/images/home/ic_x.png";
//import ic_instagram from "../../../assets/images/home/ic_instagram.png";
//import { whatIsData } from '../../../common/data';


const Numbers = () => {


    return (
        <React.Fragment>
            <section className="home-count-section body-bg-dark" id="whatis">
                <Container>
                    <Row className="justify-content-center mx-auto w-100 mb-5">
                        <Col lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-center'>
                                        <span className='display-3 fw-bold text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            200
                                        </span>
                                        <span className='display-3 text-primary'>+</span>
                                   </div>
                                   <p className='text-white lg:fs-17 fs-15 mb-0 '>Participants</p>
                                </div>
                            </Col>

                            <Col lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-center'>
                                        <span className='display-3 fw-bold text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            24
                                        </span>
                                        <span className='display-3 text-primary'>+</span>
                                   </div>
                                   <p className='text-white lg:fs-17 fs-15 mb-0'>Sessions</p>
                                </div>
                            </Col>


                            <Col lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-center'>
                                        <span className='display-3 fw-bold text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            30
                                        </span>
                                        <span className='display-3 text-primary'>+</span>
                                   </div>
                                   <p className='text-white lg:fs-17 fs-15 mb-0'>Speakers</p>
                                </div>
                            </Col>


                            <Col lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-center'>
                                        <span className='display-3 fw-bold text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            10
                                        </span>
                                        <span className='display-3 text-primary'>+</span>
                                   </div>
                                   <p className='text-white lg:fs-17 fs-15 mb-0'>Countries</p>
                                </div>
                            </Col>
                    </Row>
                    <Row className="numbers-content">
                        <Col lg={8} sm={12} className='mx-auto'>
                            <div className="py-4">
                                <p className="mb-3 text-white fs-15 text-center lh-lg">This Lagos edition will focus on <strong>The Future of Corporate Banking,</strong> convening senior executives from banks, corporates, regulators, fintechs, and technology partners. The event will serve as a dynamic platform for thought leadership, collaboration, and meaningful dialogue on how to drive innovation and growth in the corporate banking sector.</p>
                                <p className="mb-4 text-white fs-15 text-center lh-lg"><strong>As anchor sponsor, Bazara Technologies</strong> will also use FFS 2.0 as the platform to launch <strong>Manovar - a next-generation Corporate Banking Distribution Platform</strong> designed for Africa and scalable into the <strong>UK and GCC markets.</strong> Manovar represents a bold step toward transforming corporate banking by delivering smarter distribution, deeper connectivity, and future-ready financial solutions.</p>
                            </div>
                             <div className="w-100">
                                  <div className="d-flex justify-content-center">
                                      <Link to="/register" className="btn btn-primary btn-number-reg">Register Now</Link>
                                  </div>
                              </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Numbers;