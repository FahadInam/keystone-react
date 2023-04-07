import React from 'react';

import logo from '../assets/Logo.png';
import Navbar from './Navbar';
import Navtop from './Navtop';
import truckicon from '../assets/truckdash.svg'
import { useSelector } from 'react-redux';

function Dashboard() { 
    const firstName = useSelector((state) => state.user.firstname);
const lastName = useSelector((state) => state.user.lastname);

const firstname = localStorage.getItem('firstname');
const lastname = localStorage.getItem('lastname');
console.log(firstname,lastname, "first")
console.log(firstName, lastName, "here")
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
                    <div className='flex flex-col items-center '>
                    <h1 className='font-bold text-3xl text-zinc-600 mt-28' > Welcome, {firstName ? firstName:firstname} {lastName ? lastName:lastname} </h1>
                    <h5 className='text-2xl font-medium text-zinc-600'>KeyStone TMS</h5>
                    <img src={truckicon} className='mt-32' />

                    </div>
                </div>
            </div>
          </div>

)
}
export default Dashboard;
