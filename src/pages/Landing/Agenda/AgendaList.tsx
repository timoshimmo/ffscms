import React, { useState } from 'react';
import { Container, 
    Row, 
    Col, 
    Card, 
    CardBody, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
    } from 'reactstrap';
    
import { agendaData } from '../../../common/data';


const AgendaList = () => {

    const [dateNav, setDateNav] = useState("All");
    const [openEvents, setOpenEvents] = useState(false);
    const toggleEvents = () => setOpenEvents((prevState) => !prevState);
    const [currentView, setView] = useState(0);

    const detailsValue = (details: string) => {
      if (details.includes("\n")) {
        const strArr = details.split('\n');
         strArr.forEach((row, index) => {
                
            });
        return 
        <ul>
           
        </ul>
        
      } else {
        return <p className='fs-12 text-white'>details</p>;
      }
    }

    return (
        <React.Fragment>
            <section className="new-agenda-list-body" style={{ backgroundColor: "#141413"}}>
                <Container>
                    <Row>
                        <Col lg={12} xs={12}>
                             <Dropdown isOpen={openEvents} toggle={toggleEvents} className='w-full rounded bg-white'>
                                <DropdownToggle tag="button" className="nav-link fs-16 w-100 text-start fw-semibold text-black px-3 py-2">
                                    {currentView === 0 ? "All" : currentView === 1 ? "Tuesday, 19th November 2025" :  currentView === 2 ? "Wednesday, 20th November 2025" : "Thursday, 21st November 2025" }
                                </DropdownToggle>
                                <DropdownMenu className='px-2 bg-white w-100'>
                                    <DropdownItem tabIndex={0} className="fs-16 text-black fw-semibold agenda-dropdown-item" onClick={() => { setDateNav("All"); setView(0)}}>All</DropdownItem>
                                    <DropdownItem divider style={{ borderColor: '#888888ff' }}/>
                                    <DropdownItem tabIndex={1} className="fs-16 text-black fw-semibold agenda-dropdown-item" style={{ color: '#E1E7EC' }} onClick={() => { setDateNav("Tue"); setView(0)}}>Tuesday, 19th November 2025</DropdownItem>
                                     <DropdownItem divider style={{ borderColor: '#888888ff' }}/>
                                    <DropdownItem tabIndex={2} className="fs-16 text-black fw-semibold agenda-dropdown-item" style={{ color: '#E1E7EC' }} onClick={() => { setDateNav("Wed"); setView(0)}}>Wednesday, 20th November 2025</DropdownItem>
                                     <DropdownItem divider style={{ borderColor: '#888888ff' }}/>
                                    <DropdownItem tabIndex={3} className="fs-16 text-black fw-semibold agenda-dropdown-item" style={{ color: '#E1E7EC' }} onClick={() => { setDateNav("Thur"); setView(0)}}>Thursday, 21st November 2025</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row className='justify-content-between'>
                        <Col lg={12} sm={12}>
                            
                            <Row className='my-5'> 
                                    {currentView === 0 && agendaData.filter(datesdata => datesdata.dateCode === dateNav || dateNav === "All").map((item, idx) => (
                                        <>
                                            <Col lg={1}><p className="text-secondary fs-15 py-4">{item.startTime}</p></Col>
                                            <Col key={idx} lg={11} sm={12}>
                                                <Card className="shadow-none border-start border-end border-primary rounded-3 mb-5 p-4 text-white"  style={{ backgroundColor: idx % 2 === 0 ? '#1C1C1C' : '#383838' }}>
                                                    <CardBody className='p-0'>
                                                        { item.topic && item.topic !== "" ? <h6 className='text-white fw-semibold fs-15'>{item.topic}</h6> : <h6 className='text-white fw-semibold fs-15'>{item.description}</h6>}
                                                        {item.duration !== "" && <div className='d-flex mt-2 gap-2 align-items-center'>
                                                            <i className="ri-timer-line text-white fs-20"></i><span className="text-white fs-16">{item.duration} mins</span>
                                                        </div>}
                                                        <div className='mt-2'>{ item.details.includes("\n") ? 
                                                        
                                                        (
                                                        <ul className='ps-4'>
                                                             
                                                           {item.details.split('\n').map((row, index) => (
                                                                <li className='fs-12 text-white'>{row}</li>
                                                             )) 
                                                            }
                                                        </ul>
                                                        )
                                                        :
                                                        item.details.includes("+") ?
                                                        (
                                                            <div>
                                                                <p className='fs-12 text-white'>{item.details.split('+')[0]}</p>
                                                                <ul className='ps-4'>
                                                                      {item.details.split('+')[1].split('--').map((text, idx) => (
                                                                        <li className='fs-12 text-white'>{text}</li>
                                                                    )) 
                                                                }
                                                                </ul>
                                                              
                                                            </div>
                                                        )
                                                        :
                                                        <p className='fs-12 text-white'>{item.details}</p>
                                                    }
                                                        </div>
                                                    
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </>
                                       
                                    ))}

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default AgendaList;