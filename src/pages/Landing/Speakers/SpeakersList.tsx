import React, { useState } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Button,
    Offcanvas,
    OffcanvasBody } from 'reactstrap';
//import { speakersFullData } from '../../../common/data';
import { speakers2025Data } from 'common/data';
//import axios from 'axios';
//import img_iyinoluwa from "../../../assets/images/speakers/2025/img_iyinoluwa.png";
//import img_boye_ademola from "../../../assets/images/speakers/2025/img_boye_ademola.png";
//import img_abubakar from "../../../assets/images/speakers/2025/img_abubakar.jpg";
//import img_tunji from "../../../assets/images/speakers/2025/img_tunji_odumuboni.png";
//import img_meghan from "../../../assets/images/speakers/2025/img_meghan.png";
//import img_mohammed_ghonaim from "../../../assets/images/speakers/2025/img_mohammed_ghonaim.jpeg";

/*interface IProfile {
    id: Number,
    img: string,
    pic: string,
    name: string,
    tags: any,
    credentials: string,
    company: string,
    courses: any,
    bio: string
  }
    */

  interface IData {
    name: string,
    company: string,
    credentials: string,
    theme: any,
    speakers: any,
    img: any,
    tags: any,
    bio: string

}

const SpeakersList = () => {

    const [open, setOpen] = useState(false);
    const [currentData, setCurrentData] = useState<IData>();

    const [themes, setThemes] = useState([]);
    const [speakersData, setSpeakersData] = useState<IData[] | []>([]);

    const toggleLeftCanvas = () => {
        setOpen(!open);
    };

    const passData = (item: any) => {
        //console.log("ITEM: ", item)
        
        setCurrentData(item);
        setOpen(!open);
    }


    return (
        <React.Fragment>
            <section className="section speakers-list-body">
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className='w-100 sticky-top py-3 speakers-web-row' style={{ backgroundColor: '#141413', top: '60px' }}></div>
                            <Row className='web-featured-speakers'>
                                {speakers2025Data.map((item, idx) => (
                                    <Col key={idx} lg={3} sm={12}>
                                        <Card onClick={()=>passData(item)} className={idx % 2 == 0 ? "rounded-3 shadow-none home-speakers-card" : "rounded-3 shadow-none home-speakers-card-dark"} style={{ cursor: 'pointer' }}>
                                            <CardBody className="p-0">
                                                <div className='position-relative'>
                                                    <img src={item.img} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                                </div>
                                                <div className='w-100 justify-content-between item-center px-3 py-4'>
                                                    <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>{item.name}</h5>
                                                    <p className="pb-2 mb-0 fs-12">{item.credentials}</p>
                                                    <p className="pb-2 mb-0 fs-14 fw-bold">{item.company}</p>
                                                </div>                       
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            
                            {/* <Row className='speakers-mobile-row'>
                                {speakersFullData.filter(data => data.tags.includes(nav) || nav === 'All').map((item, idx) => (
                                    <Col key={idx} sm={12}>
                                        <Card onClick={()=>passData(item)} className="shadow-none rounded-0 speakers-card mb-5 text-white" style={{ cursor: "pointer" }}>
                                            <CardBody className='p-0'>
                                                <img src={item.img} alt="" className="avatar-speaker-list"/>
                                                <div className='w-100 mt-3'>
                                                    <h5 className="text-white fs-14" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{item.name}</h5>
                                                    <p className="text-white fs-11 fw-light">{item.credentials}, {item.company}</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row> */}

                                 <Row className="mobile-featured-speakers justify-content-center">
                                    {speakers2025Data.map((item, idx) => (
                                        <Col key={idx} sm={12}>
                                            <Card onClick={()=>passData(item)} className={idx % 2 == 0 ? "rounded-3 shadow-none home-speakers-card" : "rounded-3 shadow-none home-speakers-card-dark"} style={{ cursor: 'pointer' }}>
                                                <CardBody className="p-0">
                                                    <div className='position-relative'>
                                                        <img src={item.img} alt="Speaker" className="w-100 rounded-top-3 img-speaker-profile" />
                                                    </div>
                                                    <div className='w-100 justify-content-between item-center px-3 py-4'>
                                                        <h5 className='text-white fs-18 mb-2 fw-bold' style={{ fontFamily: 'Georgia' }}>{item.name}</h5>
                                                        <p className="pb-2 mb-0 fs-12">{item.credentials}</p>
                                                        <p className="pb-2 mb-0 fs-14 fw-bold">{item.company}</p>
                                                    </div>                       
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>     
                        </Col>

                        {/*  
                             <Col lg={5} sm={12}>
                                <div className='sticky-top speakers-sticky-side'>
                                    <div className='border p-4 border-white rounded-3 mb-4'>
                                        <div className="w-100 hstack py-2 gap-2 search-box">
                                            <img src={ic_search} height={15} />
                                            <input type="text" placeholder="Search" className="border-0 fs-14"  style={{ color: '#FFFFFF', backgroundColor: 'transparent' }} />
                                        </div>
                                        <h2 className='my-4 text-primary fs-20' style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>Themes</h2>
                                        <Nav pills className="nav-pills filter-btns gap-2" role="tablist">
                                            {
                                                themes.map((item: any) => (
                                                    <NavItem role="presentation">
                                                        <NavLink type="button" onClick={() => { setNav(item.replace(/ +/g, '-').toLowerCase())}} className={nav === item.replace(/ +/g, '-').toLowerCase() ? " fw-medium fs-11 active" : "fw-medium fs-11 border border-white rounded-2"}>{item}</NavLink>
                                                    </NavItem>
                                                ))
                                            }

                                        
                                        </Nav>
                                    </div>
                                </div>
                            </Col>
                        */}
                    </Row>
                </Container>
            </section>
            <div>
                {/* profile-modal profile-modal */}
                 <Offcanvas isOpen={open} toggle={toggleLeftCanvas} direction="end" className="offcanvas-end border-0 canvas-style">
                    <OffcanvasBody className="p-0 canvas-body">
                        <div className='w-100 speakers-pop-up-body'>
                            <div className='pt-2 pb-4 top-profile-close-mobile'>
                                <Button onClick={()=>setOpen(false)} className='bg-transparent border-0 p-0'><i className="mdi mdi-close display-6"></i></Button>
                            </div>
                            <Row>
                                <Col lg={5}>
                                    <img src={currentData?.img} className='w-100 border-0 rounded-3' alt="" style={{ height: 190, objectFit: "cover", objectPosition: "top center" }}/>
                                </Col>
                                <Col lg={7} className='vstack justify-content-center align-items-center'>
                                    <div className='w-100'>
                                        <p className='text-primary h3 fw-bold mb-2 lh-sm'>{currentData?.name}</p>
                                        <p className="text-white fs-15 fw-light mb-0">{currentData?.credentials}</p>
                                        <p className="text-white fs-13 fw-light">{currentData?.company}</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className='w-100 mt-4 p-4 border border-primary rounded-3'>
                                <p className='text-white fs-13 bio-style'><span className='text-primary fw-semibold'>{currentData?.name}</span> {currentData?.bio}</p>
                            </div>
                       </div>
                       
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </React.Fragment>
    );
}

export default SpeakersList;