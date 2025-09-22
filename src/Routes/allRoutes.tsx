import React from "react";
import { Navigate } from "react-router-dom";


// FFS Pages
import Home2024 from "../pages/Landing/2024/Home";
import Home from "../pages/Landing/Home";

import About from '../pages/Landing/About';
import Register from '../pages/Landing/Register';
import Exhibitor from '../pages/Landing/Exhibitor';
import Partner from '../pages/Landing/Partner';
import Sponsors from '../pages/Landing/Sponsors';
import ContactUs from '../pages/Landing/ContactUs';
import Speakers from '../pages/Landing/2024/Speakers';
import Agenda from '../pages/Landing/2024/Agenda';
import Insights from '../pages/Landing/Insights';
import PrivacyPolicy from '../pages/Landing/PrivacyPolicy';
import TermsConditions from '../pages/Landing/TermsConditions';
import CookiePolicy from '../pages/Landing/CookiesPolicy';
import UpdateRegisterForm from "pages/Landing/UpdateRegister";
import Faq from "pages/Landing/Faqs";
import BlogDetails from "pages/Landing/BlogDetails";

const publicRoutes : any= [
  //FFS Routes
  { path: "/", component: <Home /> },
  { path: "/insights", component: <Insights /> },
  { path: "/about", component: <About /> },
  { path: "/register", component: <Register /> },
  { path: "/exhibitors", component: <Exhibitor /> },
  { path: "/partners", component: <Partner /> },
  { path: "/sponsors", component: <Sponsors /> },
  { path: "/contact-us", component: <ContactUs /> },
  { path: "/2024/speakers", component: <Speakers /> },
  { path: "/2024/agenda", component: <Agenda /> },
  { path: "/insights", component: <Insights />},
  { path: "/privacy", component: <PrivacyPolicy />},
  { path: "/terms", component: <TermsConditions />},
  { path: "/cookie-policy", component: <CookiePolicy />},
  { path: "/summit", component: <Home2024 />},
  { path: "/faq", component: <Faq />},
  {path: "/booking/:token", component: <UpdateRegisterForm />},
  { path: "/blog/:slug", component: <BlogDetails />},

  /*
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  },
  */
  { path: "*", component: <Navigate to="/" /> },

];

export { publicRoutes };