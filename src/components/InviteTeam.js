import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/Logo.png';
import companyimage from '../assets/teamimage.png';


function InviteTeam() { 
return (
    <div className='flex'>

      <div className="w-1/2">
<div className="flex flex-col items-center justify-center h-screen relative">

<img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />

<div className='flex flex-col items-center bg-primaryBackground p-8 signin_css shadow-onboardingShadow'>
            <h2 className="text-4xl font-bold mb-4 ">Invite Team Member</h2>
            <p className='mb-8 leading-4'>Invite your team members</p>
            <form  className="flex flex-col">
               
                    <div className='flex'>
                        <div className='flex flex-col'>
                  <label for="password" className='text-primarytext mb-2 mt-2'>First Name</label>
                <input 
                 id="password"
                name='password'
                type="name"
                 placeholder="Enter First name" 
                //  value={values.password}
                //  onChange={handleChange}
                //  onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input mr-6"

                  />                     {/* { errors.password && touched.password ? <span className='form-error text-red-500' >{errors.password}</span> : null} */}
</div>  
<div className='flex flex-col'>
                   <label for="password" className='text-primarytext mb-2 mt-2'>Last Name</label>
                <input 
                 id="password"
                name='password'
                type="name"
                 placeholder="Enter Last name" 
                //  value={values.password}
                //  onChange={handleChange}
                //  onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input"

                  />
                   {/* { errors.password && touched.password ? <span className='form-error text-red-500' >{errors.password}</span> : null} */}
                  </div>
                  </div>
                
                                                     <label for="confirmpassword" className='text-primarytext mb-2 mt-4'>Email ID</label>
                <input 
                 id="confirm_password"
                name='confirm_password'
                type="email"
                 placeholder="Enter Email ID" 
                //  value={values.confirm_password}
                //  onChange={handleChange}
                //  onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom "

                  />
                                                     {/* { errors.confirm_password && touched.confirm_password ? <span className='form-error text-red-500' >{errors.confirm_password}</span> : null} */}
                         <div className='mt-8'>
                            <p className='text-gray-500 mb-3 font-medium'>Assign Permission to Member</p>
                                                     <hr className="border-t border-gray-300   " />
                            </div>
                            <label className="block font-bold mb-2 text-primarybtn mt-6" htmlFor="select">
                            Select Permissions
      </label>
                            <select
      className="block w-full p-2 border border-gray-300 rounded shadow-sm h-12 appearance-none bg-inherit focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
    >
<option value="" disabled selected hidden className="text-gray-400">
          Select an option
        </option>    
          <option value="option1" className="custom_option">Option 1</option>
      <option value="option2" className="custom_option">Option 2</option>
      <option value="option3" className="custom_option">Option 3</option>
    </select>

                <div className='flex justify-end'>
                <button type="submit" className="font-semibold mt-6 border border-solid bg-green-50 text-primarybtn border-gray-400  transition duration-300 ease-in-out rounded-lg  px-12 py-3 ">Skip</button>

                <button type="submit" className="font-semibold mt-6 bg-primarybtn  text-white  transition duration-300 ease-in-out rounded-lg  px-12 py-3 ml-4">Send</button>
                </div>
            </form>
            

            </div>
</div>
    </div>
    <div className="w-1/2">
    <div className="bg-primaryBackground h-full flex flex-col justify-center items-center relative">
    <h5 className='text-2xl font-semibold mb-12'>Get your project up and running faster by directly inviting your team members</h5>
<img src={companyimage} alt="logo" className="" />

        </div>

</div>
    </div>

)
}
export default InviteTeam;
