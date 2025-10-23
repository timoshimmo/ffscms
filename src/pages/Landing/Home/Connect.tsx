import React, { useRef } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import { connect2025Data } from '../../../common/data';

import ic_slide_left_arrow from "../../../assets/images/icons/ic_slide_left_arrow.png";
import ic_slide_right_arrow from "../../../assets/images/icons/ic_slide_right_arrow.png";

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
//import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imgConnectExp1 from "../../../assets/images/home/2025/img_connect_1.jpg";
import imgConnectExp2 from "../../../assets/images/home/2025/img_connect_2.jpg";
import imgConnectExp3 from "../../../assets/images/home/2025/img_connect_3.jpg";
import imgConnectExp4 from "../../../assets/images/home/2025/img_connect_4.jpg";
import imgConnectExp5 from "../../../assets/images/home/2025/img_connect_5.jpg";

const Connect = () => {

    const connectRef = useRef<SwiperRef>(null);

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
                     <div className='web-featured-speakers my-3 position-relative'>
                                        {/* <Col sm={12}> */}
                                        <Swiper
                                            spaceBetween={20}
                                            loop={true}
                                            centeredSlides={false}
                                            freeMode={true}
                                            allowTouchMove
                                            speed={5000}
                                            autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false,
                                            }}
                                            navigation={false}
                                            slidesPerView={4}
                                            modules={[Autoplay, Navigation]}
                                            ref={connectRef}
                                            className="position-relative mySwiper"
                                        >
                                            {connect2025Data.map((item, key) => (
                                                <SwiperSlide key={key} className='swiper-slide-web'>
                                                   <div className="flip-card">
                                                        <div className="flip-card-inner">
                                                            <div className="flip-card-front">
                                                                <img src={item.img} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                                                <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>{item.label}</p></div>
                                                            </div>
                                                            <div className="flip-card-back py-5 px-3">
                                                                <h1 className='flip-back-title'>{item.label}</h1> 
                                                                <p className='fs-13'>{item.description}</p> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    {/* </Col> */}
                                    <div className="connect-slide-button-left-area">
                                        <button onClick={() => connectRef?.current?.swiper.slidePrev()} className="swiper-button-custom bg-primary d-flex justify-content-center align-items-center">
                                            <img src={ic_slide_left_arrow} alt=''/>
                                        </button>
                                    </div>
                                    <div className="connect-slide-button-right-area">
                                        <button onClick={() => connectRef?.current?.swiper.slideNext()} className="swiper-button-custom btn-primary d-flex justify-content-center align-items-center">
                                            <img src={ic_slide_right_arrow} alt=''/>
                                        </button>
                                    </div>
                                </div>
                                
                    <Row className="mobile-featured-speakers justify-content-center g-4 mt-1">
                        {connect2025Data.map((item, key) => (

                             <Col lg={3} sm={12}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={item.img} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                            <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>{item.label}</p></div>
                                        </div>
                                        <div className="flip-card-back py-5 px-3">
                                            <h1 className='flip-back-title'>{item.label}</h1> 
                                            <p className='fs-13'>{item.description}</p> 
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        {/*<Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp1} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Digital Transformation in Corporate & Transaction Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Digital Transformation in Corporate & Transaction Banking</h1> 
                                        <p className='fs-14'>Modernising cores, digitising trade and lending, and embedding services through APIs that plug directly into client workflows – driving efficiency, speed, and new distribution models.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp2} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>AI & the Future of Corporate & Transaction Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>AI & the Future of Corporate & Transaction Banking</h1> 
                                        <p className='fs-14'>AI is shifting from hype to impact. From risk detection and forecasting to CFO and treasury insights, trusted and explainable AI is reshaping how corporates and banks operate.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp3} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Global Payments & Treasury</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Global Payments & Treasury</h1> 
                                        <p className='fs-14'>Cross-border settlement, liquidity, ISO 20022, stablecoins, and tokenised deposits – the new rails powering certainty, speed, and control in global transaction banking.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={12}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={imgConnectExp4} alt="" className="w-100 rounded-4 img-connect-exp" /> 
                                        <div className='flip-overlay d-flex align-items-center justify-content-center'><p className='flip-front-title text-white px-5'>Ecosystem Innovation & Open Banking</p></div>
                                    </div>
                                    <div className="flip-card-back py-5 px-3">
                                        <h1 className='flip-back-title'>Ecosystem Innovation & Open Banking</h1> 
                                        <p className='fs-14'>New value is unlocked when banks collaborate with startups, VCs, corporates, regulators, and fintechs. From scaling startup–corporate partnerships to implementing open banking frameworks, the ecosystem focus is on practical delivery: infrastructure, standards, partnerships, and new value streams in trade, treasury, and lending.</p> 
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Connect;