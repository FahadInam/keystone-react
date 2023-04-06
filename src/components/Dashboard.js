import React from 'react';

import logo from '../assets/Logo.png';
import Navbar from './Navbar';
import Navtop from './Navtop';
function Dashboard() { 
{/* <img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" /> */}

        return (
            <div className="flex h-screen">
            <div className=" p-4 navbar_css border-r">
                <Navbar />
            </div>
            <div className= "  main-body_css">
                <div className='nav-top_css border-b flex justify-end '>
                <Navtop />
                </div>
                <div className='main-content_css'>

                </div>
            </div>
          </div>

)
}
export default Dashboard;
