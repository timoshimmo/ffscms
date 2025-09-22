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
                                        <h1 className="mb-4 fw-bold text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Elevate Your <br />Meeting Experience</h1>
                                        <p className="mb-3 fs-17 text-black text-center" style={{ fontFamily: 'Montserrat, "Times New Roman", Times, serif' }}>Go beyond ordinary networking and dive into the conversations shaping tomorrow’s corporate banking. Discover how AI, open banking, and global payments are transforming the way banks, corporates, and fintechs collaborate.</p>
                                        <p className="mb-5 fs-17 text-black text-center" style={{ fontFamily: 'Montserrat, "Times New Roman", Times, serif' }}>This is your chance to connect with decision-makers, exchange bold ideas, and unlock new opportunities that will define the future of finance.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/register" className="btn btn-primary btn-number-reg">Register Now</Link>
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