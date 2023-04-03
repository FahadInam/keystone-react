import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { ForgotPassword } from '../Schemas';
import logo from '../assets/Logo.png';
import keyicon from '../assets/Keyicon.png';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import arrowleft from '../assets/ArrowLeft.png';

const initialValues = {
    email: ""
}
function SetNewPassword() { 
    const navigate = useNavigate();

    const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: ForgotPassword,
        onSubmit: async (values) => {
            const data = {
              email: values.email,
            };
            console.log(data)
            try {
                const response = await axios.post('http://192.168.18.43:8000/api/v1/forgot-password', data);

                navigate('/emailsent');
              } catch (error) {
                console.log(error)
              }
           
        }
    })
return (

    <div>
<div className="flex flex-col items-center justify-center  relative">

<img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />
<div className='flex flex-col items-center  mt-64 bg-primaryBackground p-8 w-3/12 verification_card shadow-onboardingShadow'>
<img src={keyicon} alt="logo" className="mb-12" />

<h2 className="text-2xl font-bold mb-4 ">Set new password</h2>

<p className='text-center'> Your new password must be different to previously used passwords</p>
<form onSubmit={handleSubmit} className="flex flex-col mt-8 w-auto">

<label for="password" className='text-primarytext mb-2'>Password</label>

<input 
id="password"
name='password'
type="password" 
value={values.email }
                onChange={handleChange}
                onBlur={handleBlur}
placeholder="New password"
 className="px-4 py-2 border border-gray-400 rounded h-12  btn_custom"
/>
{ errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}

<label for="confirm_password" className='text-primarytext mb-2 mt-6'>Confirm Password</label>

<input 
id="confirm_password"
name='confirm_password'
type="paswword" 
value={values.email }
                onChange={handleChange}
                onBlur={handleBlur}
placeholder="Confirm new password"
 className="px-4 py-2 border border-gray-400 rounded h-12  btn_custom"
/>
{ errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}

<button type="submit" className="px-4 py-2 mt-6 bg-primarybtn  text-white  transition duration-300 ease-in-out rounded-lg font-bold">Save</button>
</form>
<div className='flex mt-6'>
<img src={arrowleft} alt="logo" className="mr-5" />
<Link to="/"  className=' font-medium  text-gray-500 '>Back to Log in</Link>
</div>
</div>
</div>
    </div>
           

)
}
export default SetNewPassword;
