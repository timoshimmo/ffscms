import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
//import { faqFullData } from '../../../common/data';
import { faq2025Data } from '../../../common/data';

const Faq = () => {

    const [openFlush, setOpenFlush] = useState('0');
    const toggleFlush = (id: any) => {
        if (openFlush !== id) {
            setOpenFlush(id);
        }
        else {
            setOpenFlush('0');
        }
    };

    
    return (
        <React.Fragment>
            <section className="section px-4 faq-page-body"> 
            <Container>
                {/*<Row className="justify-content-center mt-5">
                    <Col lg={6}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FAQs</h2>
                            <p className="fs-13 text-white">Find answers to common questions about the conference, including registration details, schedule information, and more.</p>
                        </div>
                    </Col>
    </Row> */}
                
                <Row className='justify-content-center partners-row mx-auto'>
                    <Col lg={10} sm={12} xs={12}>
                        <Accordion id="default-accordion-example" flush open={openFlush} toggle={toggleFlush}>
                            {faq2025Data.map((item: any, key) => (
                                <AccordionItem key={key} className='shadow-none border-0 py-3'>
                                    <AccordionHeader targetId={item.id} className='text-white'>{item.label}</AccordionHeader>
                                    <AccordionBody accordionId={item.id} className='text-muted fs-14'>
                                        {item.content}
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>                            
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Faq;