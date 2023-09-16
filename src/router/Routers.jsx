import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import AllServices from '../pages/AllServices';
import About from '../pages/About';
import TeamMembers from '../pages/TeamMembers';
import Projects from '../pages/Projects';

import InfiniteInsights from '../pages/projects/InfiniteInsights';
import Profile from '../pages/projects/eProfileX';
import TaxProConnect from '../pages/projects/TaxProConnect';
import StayHub from '../pages/projects/StayHub';
import WhyChooseUs from '../components/UI/WhyChooseUs';
import VnM from '../components/UI/VnM';
import CoreValues from '../components/UI/CoreValues';
import ContactUs from '../pages/ContactUs';

const path = process.env.REACT_APP_FOR_PATH;

const Routers = () => {
  return (
      <Routes> 
          <Route path={`${path} + "/"`} element={<Home/>} />
          <Route path={`${path} + "/services"`}element={<AllServices />} />
          <Route path={`${path} + "/about"`} element={<About />}/>
          <Route path={`${path} + "/team"`} element={<TeamMembers />}/>
          <Route path={`${path} + "/projects"`} element={<Projects />}/>
          <Route path={`${path} + "/infinite-insights"`} element={<InfiniteInsights />}/>
          <Route path={`${path} + "/e-profile"`} element={<Profile />}/>
          <Route path={`${path} + "/tax"`} element={<TaxProConnect />}/>
          <Route path={`${path} + "/stay"`} element={<StayHub />}/>
          <Route path={`${path} + "/why-choose-us"`} element={<WhyChooseUs />}/>
          <Route path={`${path} + "/v-n-m"`} element={<VnM />}/>
          <Route path={`${path} + "/core-values"`} element={<CoreValues/>}/>
          <Route path={`${path} + "/contact-us"`} element={<ContactUs/>}/>
      </Routes>
    
  );
};

export default Routers;
