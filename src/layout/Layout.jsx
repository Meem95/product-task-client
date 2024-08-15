import React from 'react';
import Navbar from '../Pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Layout = () => {
    return (
        <div>
           <div className='container mx-auto mt-5'>
           <Navbar></Navbar>
       
           </div>
            <div className='min-h-screen mt-10 p-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;