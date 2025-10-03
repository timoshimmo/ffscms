import React, { useRef } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Navigation } from 'swiper/modules';
import ic_slide_left_arrow from "../../../assets/images/icons/ic_slide_left_arrow.png";
import ic_slide_right_arrow from "../../../assets/images/icons/ic_slide_right_arrow.png";

//import imgFeedback from "../../../assets/images/home/2025/img_feedback.png";
import ic_quotes from "../../../assets/images/icons/2025/ic_quotes.png";
import { feedbackData } from 'common/data';

const Feedback = () => {

    const swiperRef = useRef<SwiperRef>(null);

    return (
        <React.Fragment>
            <section className="feedback-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={12}>
                            <div className="text-center mb-4">
                                <h2 className="mb-3 fw-semibold lh-base text-primary"  style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Feedback From Past Attendees</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className='web-featured-speakers my-3 position-relative'>
                    {/* <Col sm={12}> */}
                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            allowTouchMove
                            speed={3000}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            slidesPerView={1}
                            modules={[Autoplay, Navigation]}
                            ref={swiperRef}
                            className="position-relative mySwiper"
                        >
                           {feedbackData.map((item, idx) => (

                                <SwiperSlide className='swiper-slide-web' key={item.id}>
                                    <Card className='bg-white rounded-4 p-4' style={{ height: 354 }}>
                                        <CardBody>
                                            <Row className="align-items-center justify-content-center" style={{ height: '100%' }}>
                                                {/* <Col lg={4} sm={12} xs={12}>
                                                    <img src={imgFeedback} alt="" height="280" className='rounded-4 img-feedback-style' />
                                                </Col> */}
                                                <Col lg={8} sm={12} xs={12}>
                                                    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                                            <img src={ic_quotes} alt="" className='mx-auto' /> 
                                                        <p className="text-black mb-4 fs-14 mx-auto text-center">{item.label}</p>
                                                        <h5 className="text-primary fw-bold fs-20 mb-0 text-center">{item.name}</h5>
                                                        <p className="text-black fs-16 text-center">{item.credentials}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    
                                </SwiperSlide>
                           ))}
                           
                        </Swiper>
                    {/* </Col> */}
                    <div className="feedback-slide-button-left-area">
                        <button onClick={() => swiperRef?.current?.swiper.slidePrev()} className="swiper-button-custom bg-primary d-flex justify-content-center align-items-center">
                            <img src={ic_slide_left_arrow} alt='' />
                        </button>
                    </div>
                    <div className="feedback-slide-button-right-area">
                        <button onClick={() => swiperRef?.current?.swiper.slideNext()} className="swiper-button-custom btn-primary d-flex justify-content-center align-items-center">
                            <img src={ic_slide_right_arrow} alt='' />
                        </button>
                    </div>
                </div >
                 <Row className="mobile-featured-speakers justify-content-center">
                    <Col>
                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            freeMode={true}
                            allowTouchMove={true}
                            speed={3000}
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper position-relative"
                        >
                            {feedbackData.map((item, idx) => (

                                <SwiperSlide key={item.id}>
                                    <Card className='bg-white rounded-4 p-3' style={{ height: 525 }}>
                                        <CardBody>
                                            <Row className="align-items-center justify-content-center"  style={{ height: '100%' }}>
                                            {/* <Col lg={4} sm={12} xs={12}>
                                                    <img src={imgFeedback} alt="" height="280" className='rounded-4 img-feedback-style' />
                                                </Col> */}
                                                <Col lg={8} sm={12} xs={12}>
                                                    <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                                                            <img src={ic_quotes} alt="" className='mx-auto' /> 
                                                        <p className="text-black mb-4 fs-14 mx-auto text-center">{item.label}</p>
                                                        <h5 className="text-primary fw-bold fs-20 mb-0 text-center">{item.name}</h5>
                                                        <p className="text-black fs-16 text-center">{item.credentials}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>  
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Feedback;