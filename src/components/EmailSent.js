import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { ForgotPassword } from '../Schemas';
import logo from '../assets/Logo.png';
import emailicon from '../assets/Email.png'
import axios from 'axios';
import { useSelector } from 'react-redux';
import arrowleft from '../assets/ArrowLeft.png';

const initialValues = {
    email: ""
}
function EmailSent({ userEmail }) { 
    const email = useSelector((state) => state.email);    

    async function handleResendLink() {
        try {
          const response = await axios.post('http://192.168.18.43:8000/api/v1/email/resend', {email});
      
          if (response.status === 200) {
            console.log('Link resend successful');
            // Handle success here
          } else {
            console.log('Link resend failed');
            // Handle failure here
          }
        } catch (error) {
          console.log('Link resend error:', error);
          // Handle failure here
        }
      }
return (

    <div>
<div className="flex flex-col items-center justify-center  relative">

<img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />
<div className='flex flex-col items-center  mt-64 bg-primaryBackground p-8 w-3/12 verification_card shadow-onboardingShadow'>
<img src={emailicon} alt="logo" className="" />

<h2 className="text-2xl font-bold mb-4 ">Check your email</h2>

<p className='text-center'>We sent a password reset link to {email}  </p>

<a href="mailto:?subject=Reset%20Password&body=Please%20follow%20the%20instructions%20to%20reset%20your%20password." className='w-full'>
  <button type="submit" className="px-4 py-2 mt-6 bg-primarybtn text-white transition duration-300 ease-in-out rounded-lg w-full h-12">
    Open email
  </button>
</a>

<div className='flex mt-6'>
<p className='mr-2'>Didn’t receive the email?</p>
<Link onClick={handleResendLink} className='text-primarytext font-bold'>Click to resend</Link>
</div>
<div className='flex mt-6'>
<img src={arrowleft} alt="logo" className="mr-5" />
<Link to="/" onClick={handleResendLink} className=' font-medium  text-gray-500 '>Back to Log in</Link>
</div>
</div>
</div>
    </div>
           

)
}
export default EmailSent;
