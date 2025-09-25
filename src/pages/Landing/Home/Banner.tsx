import React, { useState, useEffect, useRef }  from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
//import { speakersData } from '../../../common/data';

// Import Swiper React components
//import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


/*
interface IBanner {
    bannerTitle: string;
    caption: string;
    mobileCaption: string;
    button1: string;
    button2: string;
    speakerImages: any;
    seoFields: any;
}


interface ISpeakers {
    fields: {
        title: '',
        description: '',
        file: any
    };
}

const initBanner = {
    bannerTitle: '',
    caption: '',
    mobileCaption: '',
    button1: '',
    button2: '',
    speakerImages: [],
    seoFields: {}
};
*/

const Banner = () => {

    const videoEl = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        attemptPlay();
      }, []);

      const attemptPlay = () => {
            videoEl &&
            videoEl.current &&
            videoEl.current?.play().catch(error => {
                console.error("Error attempting to play", error);
            });

            //https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4
        };

   // const [speakersList, setSpeakersList] = useState<ISpeakers[] | []>([]);

   /* useEffect(() => {
        let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/3vrx9Ezv34q2B8pY0kjP25?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&metadata.tags.sys.id[all]=speakersImage'
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: fields}, {data: items}] )=> {
            //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
            //console.log(`Items: ${JSON.stringify(items.items[0].sys)}`);
           // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
            const sortedSpeakers = items.items.sort(function(a: any, b: any) {
                let c = new Date(a.sys.updatedAt) as any;
                var d = new Date(b.sys.updatedAt) as any;
                return c-d;
            });
            console.log(`Sorted: ${JSON.stringify(sortedSpeakers)}`);
            setDataEntry(fields.fields);
            setSpeakersList(sortedSpeakers);
        });
    }, []);*/

    return (
        <React.Fragment>
            <section className="section ffs-banner-home parallax" id="banner">
               
            {/*<iframe
                title='Seabass Launch Presentation'
                className="youtube-background-video"
                src="https://www.youtube.com/embed/Z_mllESMBws?controls=0&mute=1&autoplay=1&loop=1&playlist=Z_mllESMBws"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>*/}

            <video
                className='youtube-background-video'
                playsInline
                loop
                src="https://res.cloudinary.com/westpaybankit/video/upload/v1730055056/FFS/FFS_Summit_Summary.mp4"
                ref={videoEl}
            />
            <div className="bg-overlay"></div>
            <Container className='ffs-container'>
                <Row className='justify-content-center align-items-end'>
                    <Col lg={10} sm={12} className='px-4'>
                        <div className="text-center">
                            <h1 className="display-3 fw-bold text-white title" style={{ fontFamily: 'Georgia, Montserrat' }}>Shaping the Future of Corporate Banking</h1>
                            {/* <p className='text-white fs-18 mb-2 fw-semibold'>Shaping the Future of Corporate Banking</p> */}
                            <p className="h5 text-primary mb-4 py-2 caption-web" style={{ fontWeight: 600 }}><i className="ri-calendar-2-line" style={{ fontWeight: 400, marginRight: 5 }}></i> November 19th, 2025 <span className='text-white bg-white border border-white mx-2' style={{ display: 'inline-block', height: '25px' }}></span><i className="ri-map-pin-line" style={{ fontWeight: 400, marginRight: 5 }}></i> Four Points by Sheraton, V.I, Lagos</p>
                            <div className='w-100 caption-mobile mb-4 py-2 '>
                                <p className="h5 text-primary" style={{ fontWeight: 600 }}><i className="ri-calendar-2-line" style={{ fontWeight: 400, marginRight: 5 }}></i> November 19th, 2025</p>
                                <p className="h5 text-primary" style={{ fontWeight: 600 }}><i className="ri-map-pin-line" style={{ fontWeight: 400, marginRight: 5 }}></i> Four Points by Sheraton, V.I, Lagos</p>
                            </div> 

                            {/* <p className="h5 text-primary mb-4 py-2 caption-web" style={{ fontWeight: 600 }}>{dataEntry.caption}</p>
                            <p className="h5 text-primary mb-4 py-2 caption-mobile" style={{ fontWeight: 600 }}>{dataEntry.mobileCaption}</p> */}
                        </div>
                    </Col>
                </Row>
                   
                <Row className="justify-content-center banner-btn-area">
                    <Col lg={8} sm={12} xs={12} className='px-3'>
                        {/*
                        
                                <div className="w-100 btn-home-web">
                                        <div className="d-flex gap-3 justify-content-center">
                                            <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                            <NavLink href="#whatis" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                        </div>
                                </div>

                                <div className="w-100">
                                    <div className="d-flex gap-3 justify-content-center">
                                        <Link to="/register" className="btn btn-primary btn-banner">Register</Link>
                                        <NavLink href="#whatis" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">See More</NavLink>
                                    </div>
                                </div>

                            */}

                            <div className="w-100 btn-home-web">
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link to="/register" className="btn btn-primary btn-banner">Register Now</Link>
                                    <Link to="/agenda" className="btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">View Agenda</Link>
                                </div>
                            </div>

                            <div className="w-100 btn-home-mobile">
                                <div className="d-flex flex-column align-items-center gps-3 px-5">
                                    <Link to="/register" className="w-100 btn btn-primary btn-banner">Register Now</Link>
                                    <Link to="/agenda" className="w-100 mt-3 btn btn-outline-secondary border border-secondary border-2 btn-banner btn-banner-secondary">View Agenda</Link>
                                </div>
                            </div>  
                    </Col>
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Banner;