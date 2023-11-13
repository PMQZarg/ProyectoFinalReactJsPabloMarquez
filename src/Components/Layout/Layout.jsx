import React from 'react';

import Footer  from './footer/Footer';
import { Outlet } from 'react-router-dom';
import { NavBar } from './navBar/NavBar';


const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <NavBar/>
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout