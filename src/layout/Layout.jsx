import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;