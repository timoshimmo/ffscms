import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { speakersData } from '../../../common/data';


const Highlights = () => {
    return (
        <React.Fragment>
            <section className="highlights-section">
            <Container>
                <Row className="justify-content-center speakers-web">
                    <Col lg={12}>
                        <div className="text-center pt-5 pb-3 highlights-border"></div>
                    </Col>
                    <Col lg={8} xs={12}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Highlights from FFS 1.0 London (2024)</h2>
                            <p className="mb-5 fs-15 text-white text-center">Relive the energy and insights from our inaugural edition in London: a global platform where banks, fintechs, corporates, regulators, and innovators came together to shape the future of financial services.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center speakers-mobile mt-4">
                     <Col lg={12}>
                        <div className="text-center pt-5 pb-3 highlights-border"></div>
                    </Col>
                    <Col sm={12} xs={12}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 h1 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Highlights from FFS 1.0 London (2024)</h2>
                            <p className="mb-5 fs-15 text-white text-center">Relive the energy and insights from our inaugural edition in London: a global platform where banks, fintechs, corporates, regulators, and innovators came together to shape the future of financial services.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12} className='d-flex justify-content-center'>
                        <iframe
                            title='FFS Highlights 2024'
                            className="w-ful rounded-5 border border-gray mx-auto mb-4 highlights-vid"
                            width="1000" 
                            height="600"
                            src="https://www.youtube.com/embed/fj7bdU311KU&t=8s?controls=0&mute=1&autoplay=0&loop=1&playlist=fj7bdU311KU&t=8s"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Col>
                    <Col lg={12}>
                        <div className="text-center mt-5 mb-5 highlights-border"></div>
                    </Col>
                </Row>     
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Highlights;