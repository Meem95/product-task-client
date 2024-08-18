import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Layout = () => {
    return (
        <div >
           <div className='container mx-auto'>
           <Navbar></Navbar>
       
           </div>
            <div className='min-h-[calc(100vh-350px)] '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;