import React from 'react';
import { Row, Col, Container} from 'reactstrap';

const Banner = () => {

    return (
        <React.Fragment>
            <section className="banner-height d-flex align-items-end">
                {/*<div className="bg-overlay"></div> */}
                <Container>
                     <Row className='w-100 pb-5'>
                        <Col lg={12}>
                            <h2 className="w-100 fw-bold lh-base text-primary display-4" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FFS 2025 Agenda</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Banner;