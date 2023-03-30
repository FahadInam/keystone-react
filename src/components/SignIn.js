import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useFormik } from 'formik';
import { SignInSchema } from '../Schemas';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const initialValues = {
    email: "",
    password: ""
}
const clientID = "675235851160-vt3qgar1v9b9khtkqtghgmlta4p8gm1o.apps.googleusercontent.com";
function Signin() { 
    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log("success")
    }
    const onFailure = (res) => {
        console.log(res)
    }
    const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: SignInSchema,
        onSubmit: async (values) => {
            const data = {
              email: values.email,
              password: values.password
            };
            console.log(data)
            try {
                const response = await axios.post('http://192.168.18.43:8000/api/v1/login', data);
                navigate('/companyonboard');
              } catch (error) {
                if (error.response && error.response.status === 403) {
                  console.log("Account not verified.");
                  navigate('/verify');
                } else {
                  console.log("Error:", error);
                }
              }
           
        }
    })
    return (
        
        <div className="flex flex-col items-center justify-center h-screen relative">
        <img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />

            <div className='flex flex-col items-center bg-primaryBackground p-8 signin_css shadow-onboardingShadow'>
            <h2 className="text-3xl font-bold mb-4 ">Login</h2>
            <p className='mb-8 leading-4'>Welcome back. Please Select Method to Login:</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label for="email" className='text-primarytext mb-2'>Enter your email ID</label>

                <input 
                id="email"
                name='email'
                type="email" 
                placeholder="Email"

                 className="px-4 py-2 border border-gray-400 rounded h-12  btn_custom"
                value={values.email }
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                  { errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}
                  <label for="password" className='text-primarytext mb-2 mt-2'> Password</label>
                <input 
                 id="password"
                name='password'
                type="password"
                 placeholder="Password" 

                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                 value={values.password }
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                 { errors.password && touched.password ? <span className='form-error text-red-500' >{errors.password}</span> : null}
                    <Link to="/forgotpassword" className='ml-auto mt-4 text-primarybtn font-medium leading-4'>Forgot Password?</Link>
                <button type="submit" className="px-4 py-2 mt-6 bg-primarybtn  text-white  transition duration-300 ease-in-out rounded-lg font-medium">Login</button>
            </form>
            <div className="flex items-center justify-center mt-5 mb-5 ">
      <hr className="border-t border-gray-300 flex-1 mr-1 line-width" />
      <span className="text-gray-500 font-medium mx-1">OR</span>
      <hr className="border-t border-gray-300 flex-1 ml-1 line-width" />
    </div>
    <GoogleLogin 
  clientId={clientID}
  buttonText="Continue with Google"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  className="w-full justify-center google_btn "
/>
<div className='flex mt-8'>
<p className='mr-2'>Don’t have an account?</p>
<Link to="/signup" className='text-primarytext font-bold'>Sign up</Link>
</div>
            </div>

        </div>
    );
}

export default Signin;
