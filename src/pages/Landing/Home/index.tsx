import React from 'react';
import Navbar from "../Common/Navbar";
import Banner from "./Banner";
import Speakers from './Speakers';
import Highlights from './Highlights';
import Connect from './Connect';
import Views from './Views';
import WhoAttends from './WhoAttends';
import Numbers from './Numbers';
import ElevateExperience from './Elevate';
import Feedback from './Feedback';
import Faq from './Faq';
//import CTA from '../Common/CTA';
import CTA from './CTA';
import FooterNew from '../Common/footerNew';
//import Footer from "../Common/footer";
//import FooterSummit from '../Common/footerSummit';

const index = () => {
    document.title = "Future of Financial Services | Home";

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    return (
        <React.Fragment>
            <div className="layout-wrapper landing body-bg-dark">
                <Navbar />
                {/* <NavbarSecondary /> */}
                <Banner />
                <Numbers />
                <Speakers />
                <Connect />
                <Highlights />
                <Views />
                <Feedback />
                <WhoAttends />
                <ElevateExperience />
                <Faq />
                <CTA />
                <FooterNew />
                <button onClick={() => toTop()} className="btn btn-primary btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default index;