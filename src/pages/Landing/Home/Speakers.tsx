import React, { useRef } from 'react';
import { useNavigate  } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { speakers2025Data } from '../../../common/data';
//import { speakersData } from '../../../common/data';
import { Link } from 'react-router-dom';
//import img_iyinoluwa from "../../../assets/images/speakers/2025/img_iyinoluwa.png";
import img_boye_ademola from "../../../assets/images/speakers/2025/img_boye2.jpg";
//import img_abubakar from "../../../assets/images/speakers/2025/img_abubakar.jpg";
import img_tunji from "../../../assets/images/speakers/2025/img_tunji_odumuboni_edited.jpg";
import img_meghan from "../../../assets/images/speakers/2025/img_meghan.png";
import img_mohammed_ghonaim from "../../../assets/images/speakers/2025/img_ghonaim2.jpg";
import img_speaker_overlay from "../../../assets/images/speakers/2025/img_speaker_overlay.png";

import ic_slide_left_arrow from "../../../assets/images/icons/ic_slide_left_arrow.png";
import ic_slide_right_arrow from "../../../assets/images/icons/ic_slide_right_arrow.png";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
//import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Speakers = () => {

    let navigate = useNavigate();

    const redirect =() => {
        navigate('/speakers');
    }

    const swiperssRef = useRef<SwiperRef>(null);

    const selectedSpeaker = () => {
       
        console.log("Selected Speaker");
            // Perform navigation or other actions here
    };

    return (
        <React.Fragment>
            <section className="speakers-section pb-custom" id="speakers">
            <Container>
                <Row className="justify-content-center speakers-web">
                    <Col lg={5}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>2025 Speakers</h2>
                            <p className="mb-5 fs-15 text-white text-center">Industry leaders, innovators, and visionaries shaping the future of corporate banking</p>
                            {/* <p className="mb-3 fs-13 text-white">Our Esteemed Panel of Influential Experts Sharing Their Wisdom, Experience, and Innovative Ideas</p> */}
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center speakers-mobile mt-4">
                    <Col sm={12} xs={12}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 h1 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>2025 Speakers</h2>
                            <p className="mb-5 fs-13 text-white text-center">Industry leaders, innovators, and visionaries shaping the future of corporate banking</p>
                            {/* <p className="mb-3 fs-13 text-white">Our Esteemed Panel of Influential Experts Sharing Their Wisdom, Experience, and Innovative Ideas</p> */}
                        </div>
                    </Col>
                </Row>
               {/* <div className='web-featured-speakers w-100'>
                    <div className='gallery'>
                        <Card className="rounded-3 shadow-none home-speakers-card speaker-gallery" onClick={selectedSpeaker} style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_boye_ademola} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Boye Ademola</h5>
                                    <p className="pb-2 mb-0 fs-12">Founder & CEO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark speaker-gallery" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_mohammed_ghonaim} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Mohammed Ghonaim</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder, D360 Bank</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">Board Member, SICO Capital</p>
                                </div>                       
                            </CardBody>
                        </Card>
                        <Card className="rounded-3 shadow-none home-speakers-card speaker-gallery" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_meghan} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Meaghan Johnson</h5>
                                    <p className="pb-2 mb-0 fs-12">Convener</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">FFS Summit</p>
                                </div>                       
                            </CardBody>
                        </Card>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark speaker-gallery" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_tunji} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Tunji Odumuboni</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder & CPTO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-100 mt-5">
                        <div className="d-flex justify-content-center">
                            <Link to="/speakers" className="btn btn-primary btn-number-reg">See Speakers Lineup</Link>
                        </div>
                    </div>
                </div>  */}

                <div className='web-featured-speakers my-3 position-relative'>
                    {/* <Col sm={12}> */}
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        centeredSlides={true}
                        freeMode={true}
                        allowTouchMove
                        speed={3000}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        slidesPerView={4}
                        modules={[Autoplay, Navigation]}
                        ref={swiperssRef}
                        className="position-relative mySwiper"
                    >
                        {speakers2025Data.map((item, key) => (
                            <SwiperSlide key={key} className='swiper-slide-web'>
                                <Card className={key % 2 === 0 ? "rounded-3 shadow-none home-speakers-card" : "rounded-3 shadow-none home-speakers-card-dark"}>
                                    <CardBody className="p-0">
                                        <div className='position-relative rounded-top-3'>
                                            <img src={item.img} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                            <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                        </div>
                                        <div className='w-100 justify-content-between item-center px-3 py-4'>
                                            <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>{item.name}</h5>
                                            <p className="pb-2 mb-0 fs-12">{item.credentials}</p>
                                            <p className="pb-2 mb-0 fs-14 fw-bold">{item.company}</p>
                                        </div>                       
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                {/* </Col> */}
                <div className="home-speaker-slide-button-left-area">
                    <button onClick={() => swiperssRef?.current?.swiper.slidePrev()} className="swiper-button-custom bg-primary d-flex justify-content-center align-items-center">
                        <img src={ic_slide_left_arrow} alt=''/>
                    </button>
                </div>
                <div className="home-speaker-slide-button-right-area">
                    <button onClick={() => swiperssRef?.current?.swiper.slideNext()} className="swiper-button-custom btn-primary d-flex justify-content-center align-items-center">
                        <img src={ic_slide_right_arrow} alt=''/>
                    </button>
                </div>
                <div className="w-100 mt-5">
                    <div className="d-flex justify-content-center">
                        <Link to="/speakers" className="btn btn-primary btn-number-reg">See Speakers Lineup</Link>
                    </div>
                </div>
            </div>

             <Row className="mobile-featured-speakers justify-content-center">
                                <Col lg={5}>
                                    <Swiper
                                        spaceBetween={15}
                                        loop={true}
                                        centeredSlides={true}
                                        freeMode={true}
                                        allowTouchMove={true}
                                        speed={3000}
                                        autoplay={{
                                            delay: 1000,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={1.2}
                                        navigation={false}
                                        modules={[Autoplay]}
                                        className="mySwiper positio-relative"
                                    >
                                        {speakers2025Data.map((item, key) => (
                                            <SwiperSlide key={key}>
                                               <Card className={key % 2 === 0 ? "rounded-3 shadow-none home-speakers-card" : "rounded-3 shadow-none home-speakers-card-dark"}>
                                                    <CardBody className="p-0">
                                                        <div className='position-relative rounded-top-3'>
                                                            <img src={item.img} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                                            <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                                        </div>
                                                        <div className='w-100 justify-content-between item-center px-3 py-4'>
                                                            <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>{item.name}</h5>
                                                            <p className="pb-2 mb-0 fs-12">{item.credentials}</p>
                                                            <p className="pb-2 mb-0 fs-14 fw-bold">{item.company}</p>
                                                        </div>                       
                                                    </CardBody>
                                                </Card>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Col>
                            </Row>     
               

                {/* <Row className='web-featured-speakers'>
                    <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card" onClick={selectedSpeaker} style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_boye_ademola} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Boye Ademola</h5>
                                    <p className="pb-2 mb-0 fs-12">Founder & CEO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                     <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_mohammed_ghonaim} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Mohammed Ghonaim</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder, D360 Bank</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">Board Member, SICO Capital</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                     <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_meghan} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Meaghan Johnson</h5>
                                    <p className="pb-2 mb-0 fs-12">Convener</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">FFS Summit</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                     <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_tunji} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Tunji Odumuboni</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder & CPTO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={12}>
                        <div className="w-100 mt-3">
                            <div className="d-flex justify-content-center">
                                <Link to="/speakers" className="btn btn-primary btn-number-reg">See Speakers Lineup</Link>
                            </div>
                        </div>
                    </Col>
                </Row> 

                <Row className="mobile-featured-speakers justify-content-center">
                    <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card" onClick={selectedSpeaker} style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_boye_ademola} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Boye Ademola</h5>
                                    <p className="pb-2 mb-0 fs-12">Founder & CEO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                     <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_mohammed_ghonaim} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Mohammed Ghonaim</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder, D360 Bank</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">Board Member, SICO Capital</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                     <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_meghan} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Meaghan Johnson</h5>
                                    <p className="pb-2 mb-0 fs-12">Convener</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">FFS Summit</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={3} sm={12}>
                        <Card className="rounded-3 shadow-none home-speakers-card-dark" style={{ cursor: 'pointer' }}>
                            <CardBody className="p-0">
                                <div className='position-relative'>
                                    <img src={img_tunji} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                    <img src={img_speaker_overlay} alt="Overlay" className="w-100 rounded-top-3 speaker-overlay" />
                                </div>
                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>Tunji Odumuboni</h5>
                                    <p className="pb-2 mb-0 fs-12">Co-Founder & CPTO</p>
                                    <p className="pb-2 mb-0 fs-14 fw-bold">BazaraTech</p>
                                </div>                       
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <div className="w-100 mt-3">
                            <div className="d-flex justify-content-center">
                                <Link to="/speakers" className="btn btn-primary btn-number-reg">See Speakers Lineup</Link>
                            </div>
                        </div>
                    </Col>
                </Row> */}        
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Speakers;