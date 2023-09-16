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

const Routers = () => {
  return (
      <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/about" element={<About />}/>
          <Route path='/team' element={<TeamMembers />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/infinite-insights' element={<InfiniteInsights />}/>
          <Route path='/e-profile' element={<Profile />}/>
          <Route path='/tax' element={<TaxProConnect />}/>
          <Route path='/stay' element={<StayHub />}/>
          <Route path='/why-choose-us' element={<WhyChooseUs />}/>
          <Route path='/v-n-m' element={<VnM />}/>
          <Route path='/core-values' element={<CoreValues/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    
  );
};

export default Routers;
