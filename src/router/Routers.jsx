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
          <Route path={process.env.REACT_APP_FOR_PATH + "/"} element={<Home/>} />
          <Route path={process.env.REACT_APP_FOR_PATH + "/services"} element={<AllServices />} />
          <Route path={process.env.REACT_APP_FOR_PATH + '/about'} element={<About />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/team'} element={<TeamMembers />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/projects'} element={<Projects />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/infinite-insights'} element={<InfiniteInsights />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/e-profile'} element={<Profile />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/tax'} element={<TaxProConnect />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/stay'} element={<StayHub />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/why-choose-us'} element={<WhyChooseUs />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/v-n-m'} element={<VnM />}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/core-values'} element={<CoreValues/>}/>
          <Route path={process.env.REACT_APP_FOR_PATH + '/contact-us'} element={<ContactUs/>}/>
      </Routes>
    
  );
};

export default Routers;
