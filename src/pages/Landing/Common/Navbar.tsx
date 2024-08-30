import React, { useState, useEffect, useCallback } from 'react';
import { Collapse, Container, NavbarToggler, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom'; 
import Scrollspy from "react-scrollspy";
import axios from 'axios';

//import Images

/*import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";
import ffsLogoLight from "../../../assets/images/ffs_top_logo_light.png";
*/
import ffsLogoDark from "../../../assets/images/ffs_top_logo_dark.png";
import ffsLogoLight1 from "../../../assets/images/ffs_top_logo_light2.png";


interface IMenu {
    fields: {
        title: '',
        link: '',
        position: number,
        type: number
    };
}


const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");
    const [activeLink, setActiveLink] = useState<any>();
    const [openEvents, setOpenEvents] = useState(false);
    const [openInvolved, setInvolved] = useState(false);

    const [menuList, setMenuList] = useState<IMenu[] | []>([]);
    const [subMenuList, setSubMenuList] = useState<IMenu[] | []>([]);


    const toggle = () => setisOpenMenu(!isOpenMenu);
    const toggleEvents = () => setOpenEvents((prevState) => !prevState);
    const toggleInvolved = () => setInvolved((prevState) => !prevState);

    const closeInvolved = () => setInvolved(false);
    const closeEvents = () => setOpenEvents(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = useCallback(() => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }, [])

    useEffect(() => {
        const activation = (event: any) => {
            const target = event.target;
            if (target) {
                target.classList.add('active');
                setActiveLink(target);
                if (activeLink && activeLink !== target) {
                    activeLink.classList.remove('active');
                }
            }
        };
        const defaultLink = document.querySelector('.navbar li.a.active');
        if (defaultLink) {
            defaultLink?.classList.add("active")
            setActiveLink(defaultLink)
        }
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
            link.addEventListener('click', activation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', activation);
            });
        };
    }, [activeLink]);

    var windowSize = document.documentElement.clientWidth;
    useEffect(() => {
        var navbar: any = document.getElementById("navbar");
        if (windowSize >= 992) {
            navbar.classList.add("navbar-light");
        }
        else {
            navbar.classList.remove("navbar-light");
        }
    }, [windowSize]);


    useEffect(() => {

        let endpoints = [
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&metadata.tags.sys.id[all]=parentMenu',
            'https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&metadata.tags.sys.id[all]=getInvolved'
        ];

      /*  axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4&metadata.tags.sys.id[all]=parentMenu")
        .then(response=> {

           // const results: any = response;
            const results = response.data.items.sort((a: any, b: any) => a.fields.position > b.fields.position ? 1 : -1)
            setMenuList(results);
            console.log(`MENUS: ${JSON.stringify(results)}`);
        }) */

        
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: menus}, {data: submenus}] )=> {
            //console.log(`Fields: ${JSON.stringify(fields.fields)}`);
            //console.log(`Items: ${JSON.stringify(items.items[0].sys.createdAt)}`);
           // const sortedSpeakers = items.items.sort((a: any,b: any) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt));
         /*  const sortedSpeakers = items.items.sort(function(a: any, b: any) {
                let c = new Date(a.sys.createdAt) as any;
                var d = new Date(b.sys.createdAt) as any;
                return c-d;
            }); */

            const sortedMenus = menus.items.sort((a: any, b: any) => a.fields.position > b.fields.position ? 1 : -1);
            const sortedSubMenus = submenus.items.sort((a: any, b: any) => a.fields.position > b.fields.position ? 1 : -1);
            //console.log(`Sorted: ${JSON.stringify(sortedSpeakers)}`);
            setMenuList(sortedMenus);
            setSubMenuList(sortedSubMenus);
        });

        
    
    


    }, [setMenuList]);

    /* onMouseEnter={toggleInvolved} onMouseLeave={closeInvolved}  */

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img src={ffsLogoDark} className="card-logo card-logo-dark" alt="logo dark" height="40" />
                        <img src={ffsLogoLight1} className="card-logo card-logo-light" alt="logo light" height="40" />
                    </Link>
                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>
                   
                    <Collapse
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                        isOpen={isOpenMenu}
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "home",
                                "agenda",
                                "speakers",
                                "get-involved",
                            ]}
                            currentClassName="active"
                            className="navbar-nav ms-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            {menuList.map((item, key) => (
                                    
                                    item.fields.type === 0 ?
                                        <>
                                            <li className="nav-item px-4 web-navbar">
                                                <NavLink className="nav-link fs-14 text-white" to={item.fields.link} activeClassName="active" tag={RRNavLink}>{item.fields.title}</NavLink>
                                            </li>
                                            <li className="nav-item px-4 mobile-navbar">
                                                <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to={item.fields.link} activeClassName="active" tag={RRNavLink}>{item.fields.title}</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className="mobile-navbar">
                                                <UncontrolledDropdown inNavbar nav>
                                                    <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                                        {item.fields.title}
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        {/*
                                                            <DropdownItem href='/sponsors' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                                            <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                            <DropdownItem href='/partners' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                                            <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                        */}
                                                        
                                                        {subMenuList.map((item, key) => (
                                                            key < subMenuList.length - 1 ?
                                                            <>
                                                                <DropdownItem href={item.fields.link} className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>{item.fields.title}</DropdownItem>
                                                                <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                            </>
                                                            :
                                                            <>
                                                                <DropdownItem href={item.fields.link} className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>{item.fields.title}</DropdownItem>
                                                            </>

                                                        ))}
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </li>
                                            <li className="nav-item px-4 web-navbar">
                                                <Dropdown isOpen={openInvolved} toggle={toggleInvolved}>
                                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                                        {item.fields.title}
                                                    </DropdownToggle>
                                                    <DropdownMenu className='px-2'>
                                                        {subMenuList.map((item, key) => (

                                                            key < subMenuList.length - 1 ?
                                                            <>
                                                                <DropdownItem href={item.fields.link} className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>{item.fields.title}</DropdownItem>
                                                                <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                                            </>
                                                            :
                                                            <>
                                                                <DropdownItem href={item.fields.link} className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>{item.fields.title}</DropdownItem>
                                                            </>
                                                        
                                                        ))}
                                                        
                                                        
                                                        {/* <DropdownItem href='/partners' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem> */}
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>
                                        </>
                                    
                                    ))
                            
                            }
                           
                            {/*

                             <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </li>
                             <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/agenda" activeClassName="active" tag={RRNavLink}>Agenda</NavLink>
                            </li>

                            <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/speakers" activeClassName="active" tag={RRNavLink}>Speakers</NavLink>
                            </li>
                            <li className="nav-item px-4 web-navbar">
                                <NavLink className="nav-link fs-14 text-white" to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                            </li>

                             <li className="nav-item px-4 web-navbar">
                                <Dropdown isOpen={openInvolved} toggle={toggleInvolved}>
                                    <DropdownToggle caret tag="button" className="nav-link fs-14">
                                        Get Involved
                                    </DropdownToggle>
                                    <DropdownMenu className='px-2'>
                                        <DropdownItem href='/sponsors' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href='/partners' className="fs-14 fw-light" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>

                            <li className="mobile-navbar">
                                <UncontrolledDropdown inNavbar nav>
                                    <DropdownToggle caret nav className="nav-link nav-item-mobile fs-14 d-flex justify-content-end">
                                        Get Involved
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href='/sponsors' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Be a Sponsor</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                        <DropdownItem href='/partners' className="fs-14 fw-light text-end" style={{ color: '#E1E7EC' }}>Partner with us</DropdownItem>
                                        <DropdownItem divider style={{ borderColor: '#E1E7EC' }}/>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </li>
                          
                        */}
                            
                            {/* Mobile Navbar  */}

                            {/*
                            
                        <li className="nav-item mobile-navbar">
                                <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to="/home" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                            </li>
                            <li className="nav-item mobile-navbar">
                                <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to="/speakers" activeClassName="active" tag={RRNavLink}>Speakers</NavLink>
                            </li>
                            <li className="nav-item mobile-navbar">
                                    <NavLink className="nav-link fs-14 text-white d-flex justify-content-end" to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                            </li>
                        
                    */}
                            

                            {/* Mobile Navbar  */}
                            
                           
                        </Scrollspy>
                        <div className='ms-4 mobile-nav-button'>
                            <Link to="/register" className="btn btn-success btn-banner">Register</Link>
                        </div>       
                    </Collapse>
                </Container>
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
        </React.Fragment>
    );
}

export default Navbar;
