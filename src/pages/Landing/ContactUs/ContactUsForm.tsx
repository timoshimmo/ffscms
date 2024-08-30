import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactUsForm = () => {

    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone_no: '',
            additional_info: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Please Enter Your First Name"),
            last_name: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string().required("Please Enter Your Email"),
            phone_no: Yup.string().required("Please Your Phone Number is Required"),
            additional_info: Yup.string(),
        }),
        onSubmit: (values) => {
            /*dispatch(registerUser(values));
            setLoader(true)
            */

            handleClick();
        }
    });

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setSuccessful(true);
            setLoading(false);
        }, 7000);
    };

    return (
        <React.Fragment>
            <section className="section form-container">
                <Container>
                    <Row className="justify-content-end">
                        <Col lg={5}>
                            <div className="w-100">
                                <h2 className="fw-bold lh-sm text-primary display-6" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Get in Touch</h2>
                                <p className="mb-4 fw-light text-white fs-15" >Whether you need more information about the summit, assistance with registration, or have specific inquiries, our team is ready to assist you. Fill out the form and our team will get back to you shortly.</p>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className='px-3'>
                            {!successful ?
                            <Card className="border mb-5 border-white bg-white rounded-4 shadow-none">
                                <CardBody className="p-4">
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                    className="needs-validation" action="#">
                                    <Row>
                                        <Col lg={6} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">First Name</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <Input 
                                                    id="first_name"
                                                    name="first_name"
                                                    type="text" 
                                                    placeholder="Enter First Name" 
                                                    className="border-0 fs-14 px-2 form-inputs-custom"  
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.first_name || ""}
                                                    invalid={
                                                        validation.touched.first_name && validation.errors.first_name ? true : false
                                                    }
                                                    style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                />  
                                            </div>
                                        </Col>
                                        <Col lg={6} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Last Name</Label>
                                                <div className="w-100 vstack p-2 rounded-2 form-box">
                                                    <Input 
                                                        id="last_name"
                                                        name="last_name"
                                                        type="text" 
                                                        placeholder="Enter Last Name" 
                                                        className="border-0 fs-14 px-2"  
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.last_name || ""}
                                                        invalid={
                                                            validation.touched.last_name && validation.errors.last_name ? true : false
                                                        }
                                                        style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                    />
                                                </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Email Address</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter email address"
                                                    className="border-0 fs-14 px-2 py-2"  
                                                    type="email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ""}
                                                    invalid={
                                                        validation.touched.email && validation.errors.email ? true : false
                                                    }
                                                    style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Phone Number</Label>
                                            <PhoneInput
                                                country={'gb'}
                                                value={value}
                                                placeholder="Enter Phone Number" 
                                                onChange={phone => setValue(phone)}
                                                containerClass="w-100 vstack p-2 rounded-2 form-box"
                                                inputClass='fs-14 phone-input-style'
                                                inputStyle={{ color: '#303030', borderColor: 'transparent', boxShadow: 'none', fontFamily: 'Montserrat, IBM Plex Sans, sans-serif' }} 
                                                dropdownStyle={{ borderColor: 'transparent', boxShadow: 'none' }}
                                                buttonStyle={{ borderColor: 'transparent', backgroundColor: 'transparent', boxShadow: 'none' }}
                                            />
                                            {/*<div className="w-100 vstack p-2 rounded-2 form-box">
                                               
                                                <Input 
                                                    id="phone_no"
                                                    name="phone_no"
                                                    type="text" 
                                                    placeholder="Enter Phone Number" 
                                                    className="border-0 fs-14 px-2"  
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.phone_no || ""}
                                                    invalid={
                                                        validation.touched.phone_no && validation.errors.phone_no ? true : false
                                                    }
                                                    style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                /> 
                                            </div> */}
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-4'>
                                            <Label className="fs-13 form-label mb-0">Additional Information</Label>
                                            <div className="w-100 vstack p-2 rounded-2 form-box">
                                                <Input 
                                                    id="additional_info"
                                                    name="additional_info"
                                                    type="textarea"
                                                    rows="4" 
                                                    placeholder="Enter Your Message here" 
                                                    className="border-0 fs-14 px-2"  
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.additional_info || ""}
                                                    invalid={
                                                        validation.touched.additional_info && validation.errors.additional_info ? true : false
                                                    }
                                                    style={{ color: '#303030', backgroundColor: 'transparent', boxShadow: 'none' }} 
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={12} sm={12} className='px-2 mt-5'>
                                            <button className=" w-100 btn btn-primary rounded-5 py-2 fs-16" type="submit" disabled={loading? true : false}>
                                                {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> }
                                                {loading ? 'Loading...' : 'Send'}
                                            </button>
                                            {/* <input type="button" className="w-100 btn btn-primary border border-primary rounded-5 py-2 fs-16" value="Send" /> */}
                                        </Col>
                                    </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                             :
                             <Card className="border border-white bg-white rounded-4 shadow-none">
                                 <CardBody className="p-4">
                                     <Row className='justify-content-center'>
                                         <Col lg={9} sm={12} className='px-2 mt-4'>
                                             <h2 className='text-primary mb-3 text-center fw-bold' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Your Entry Was Successful</h2>
                                             <p className='text-dark fs-14 text-center fw-medium px-4 mb-4' style={{ color: '#303030' }}>We have received your request, we will get back to you shortly."</p>
                                             <div className="hstack justify-content-center">
                                                 <Link to="/" className="text-muted fs-12">Back to Home</Link>
                                             </div>
                                         </Col>
                                     </Row>
                                 </CardBody>
                             </Card>
                         }
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default ContactUsForm;