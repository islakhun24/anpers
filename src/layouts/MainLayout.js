
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div className=''>
    <Header />
    <Outlet/>
    <Footer />
  </div>
);

export default MainLayout;  