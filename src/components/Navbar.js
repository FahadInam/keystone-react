import React from 'react';

import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import ordericon from '../assets/ordericon.svg';
import settingicon from '../assets/seticon.svg';
import arrowdown from '../assets/arrowdown.png';
import { useState } from 'react';
import invoiceicon from '../assets/invoiceicon.svg';
import companyicon from '../assets/companyicon.svg';

function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);
        return (

    <nav >

<img src={logo} alt="logo"  />
                <div className='mt-24'>
                <div className='flex mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link  className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Order</Link>
                </div>
                <div className='flex  mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Shipment</Link>
                </div>
                <div className='flex  mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Customer</Link>
                </div>
                <div className='flex  mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Equipment</Link>
                </div>
                <div className='flex  mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Commodity</Link>
                </div>
                <div className='flex  mb-2 py-3  nav-opt'>
                    <img src={ordericon} />
                    <Link className='font-medium text-2xl text-NavBarText pl-2 leading-6'> Invite Team</Link>
                </div>
                <div>
      <div className="flex mb-4 py-3  nav-opt">
        <img src={settingicon} alt="Settings Icon" />
        <Link className="font-medium text-2xl text-NavBarText pl-2 leading-6">Settings</Link>
        <div className="ml-auto">
          <img
            src={arrowdown}
            className="ml-auto cursor-pointer"
            alt="Arrow Down Icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div>
          <ul>
            <div className='flex mb-6 px-8'>
            <li className="  hover:bg-gray-200 cursor-pointer font-medium text-NavBarText">Invoice</li>
            <img src={invoiceicon} className='ml-auto' />

            </div>
            <div className='flex  px-8'>
            <li className="  hover:bg-gray-200 cursor-pointer font-medium text-NavBarText">Company Information</li>
            <img src={companyicon} className='ml-auto' />

            </div>
          </ul>
        </div>
      )}
    </div>
                </div>
    </nav>

    

)
}
export default Navbar;
