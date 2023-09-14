import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../router/Routers';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routers />
        <ScrollUpButton />
        <Footer />
    </div>
  )
};

export default Layout;