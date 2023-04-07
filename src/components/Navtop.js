import React from 'react';

import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import ordericon from '../assets/ordericon.svg';
import settingicon from '../assets/seticon.svg';
import arrowdown from '../assets/arrowdown.png';
import { useState } from 'react';
import invoiceicon from '../assets/invoiceicon.svg';
import companyicon from '../assets/companyicon.svg';
import helpicon from '../assets/icons/helpicon.ico'
import "flowbite";
function Navtop() { 
        return (

<div className='flex self-center'>

              <div>
                {/* <i className={helpicon} /> */}
                {/* <img src={helpicon} /> */}
              </div>
                <div className='self-center  user_css w-9 h-9 mr-5 flex justify-center items-center '>
                  <span >FD</span>
                </div>
                <div className='mr-6'>
                          <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white   focus:ring-4 ring-pirmaryColor focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  " type="button"> <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                      <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>Bonnie Green</div>
                            <div class="font-medium truncate">name@flowbite.com</div>
                          </div>
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                          </ul>
                          <div class="py-2">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                          </div>
                      </div>
                </div>
               

</div>
    

)
}
export default Navtop;
