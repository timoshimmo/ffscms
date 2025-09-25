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
                                   <p className='text-white lg:fs-17 fs-15 mb-0 '>Delegates</p>
                                </div>
                            </Col>

                            <Col lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-center'>
                                        <span className='display-3 fw-bold text-primary' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            20
                                        </span>
                                        <span className='display-3 text-primary'>+</span>
                                   </div>
                                   <p className='text-white lg:fs-17 fs-15 mb-0'>Sessions & Dialogues</p>
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
                                   <p className='text-white lg:fs-17 fs-15 mb-0'>Global Speakers</p>
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
                                <h2 className="mb-2 fw-semibold lh-base text-center text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Shaping the Future of Corporate Banking</h2>
                                <p className="mb-3 text-white fs-15 text-center lh-lg">The Lagos edition of the Future of Financial Services Summit will convene senior executives from banks, corporates, regulators, fintechs, and technology partners. .</p>
                                <p className="mb-4 text-white fs-15 text-center lh-lg">It provides a dynamic platform for thought leadership, collaboration, and meaningful dialogue on how innovation and growth are reshaping corporate and transaction banking.</p>
                            </div>
                             <div className="w-100">
                                  <div className="d-flex justify-content-center">
                                      <Link to="https://tix.africa/discover/ffssummit" className="btn btn-primary btn-number-reg" target="_blank" rel="noopener noreferrer">Register Now</Link>
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