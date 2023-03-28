import React from 'react';

import logo from '../assets/Logo.png';
import verify from '../assets/verifyemail.png';

function EmailVerification() { 
return (

    <div>

<img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />
<div className="flex flex-col items-center justify-center h-screen relative">
<div className='flex flex-col items-center bg-green-50 p-8 w-3/12 verification_card shadow-onboardingShadow'>

<h2 className="text-2xl font-bold mb-4 ">Check your inbox to verify your email</h2>

<img src={verify} alt="verify"  className='mt-12'/>
<p className='text-center mt-12' >We have sent a verification link. Please click on the link to verify your account and start using keystone.
</p>
<div className='flex mt-8'>
<p className='mr-2'>Need help? Have a question?</p>
<a to="/signup" className='text-primarytext font-bold'>support team</a>
</div>
<div className='flex mt-6'>
<p className='mr-2'>Didn't receive any email?</p>
<a to="/signup" className='text-primarytext font-bold'>Resent link</a>
</div>
</div>
</div>
    </div>
           

)
}
export default EmailVerification;