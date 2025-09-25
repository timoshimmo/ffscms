import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


const ElevateExperience = () => {
    
    return (
        <React.Fragment>
            <section className="elevate-section elevate d-flex align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Card className="bg-white rounded-4 shadow">
                                <CardBody className="py-5 px-4">
                                    <div className="text-center">
                                        <h1 className="mb-4 fw-bold text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Elevate Your<br />Summit Experience</h1>
                                        <p className="mb-3 fs-17 text-black text-center" style={{ fontFamily: 'Montserrat, "Times New Roman", Times, serif' }}>Go beyond networking, immerse yourself in the conversations defining the future of corporate & transaction banking. From digital transformation and AI to global payments and treasury, discover how banks, corporates, and fintechs are forging the next generation of financial services.</p>
                                        <p className="mb-5 fs-17 text-black text-center" style={{ fontFamily: 'Montserrat, "Times New Roman", Times, serif' }}>This is your moment to engage with industry leaders, challenge ideas, and unlock bold opportunities that will shape the next era of finance.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="https://tix.africa/discover/ffssummit" className="btn btn-primary btn-number-reg" target="_blank" rel="noopener noreferrer">Register Now</Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default ElevateExperience;