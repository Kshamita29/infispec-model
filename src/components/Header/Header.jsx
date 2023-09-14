import React from 'react';

import logo from '../../assets/images/infi.png';

import './header.css';

const nav__links=[
  {
    path:'/',
    display: 'Home',
  },
  {
    path:'/about',
    display: 'About',
  },
  {
    path:'/services',
    display: 'Services',
  },
  {
    path:'/team',
    display: 'Team',
  },
  {
    path:'/projects',
    display: 'Innovation',
  },
  {
    path:'/contact-us',
    display: 'ContactUs',
  },
];


const Header = () => {
  return (
    <><header className="header">
        <div className="container">
          <div className="nav__wrapper">
            
            {/* ------------ logo ------------ */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* ------------ navigation ------------ */}
            <div className="navigation">
              <ul className="menu">
              {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.path} className='menu__link'>
                      {item.display}
                    </a>
                  </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </header></>
  )
}

export default Header;