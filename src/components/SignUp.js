import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { SignUpSchema } from '../Schemas';
import logo from '../assets/Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode"
const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: ""

}


  
function Signup() { 

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "675235851160-66cn8tgpnshencddslna5s54a5tnval5.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      {
      theme: "outline",
      size: "large",
      width: "long",
    });

  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Credential Response:", response);
    var userdata = jwt_decode(response.credential)
    console.log(userdata)
    // Handle the Google Sign-In response (e.g., send the response to your API for authentication)
  };
    const navigate = useNavigate();
    const dispatch = useDispatch();


    
const onSuccess = (response) => {
  console.log("Login Success:", response.profileObj);
  // Store user information and access token in your app state or a context provider
};

const onFailure = (response) => {
  console.log("Login Failure:", response);
};

   const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit: async (values) => {
            const data = {
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              password: values.password,
              password_confirmation: values.password_confirmation,
            };
      
            try {
              const response = await axios.post('http://192.168.18.43:8000/api/v1/register', data);
      
              if (response.status === 201) {
                console.log("Registration successful");
                dispatch({ type: 'SET_EMAIL', email: values.email }); // Update the email state
                                navigate('/verify');
              } else {
                console.log("Registration failed");
                // Handle registration failure here
              }
            } catch (error) {
              console.log(error);
              // Handle registration failure here
            }
        }
    })
    return (
<div>
        <div className="flex flex-col items-center justify-center h-screen">
        <img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />

            <div className='flex flex-col items-center bg-primaryBackground p-8 signin_css shadow-onboardingShadow'>
            <h2 className="text-4xl font-bold mb-4 ">Sign up</h2>
            <p className='mb-8 leading-4'>Please enter your details:</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label for="firstname" className='text-primarytext mb-2'>First Name</label>

                <input 
                id="firstname"
                name='firstname'
                type="name" 
                placeholder="Enter Firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                 className="px-4 py-2 border border-gray-400 rounded h-12  btn_custom"
                  />
                                   { errors.firstname && touched.firstname ? <span className='form-error text-red-500' >{errors.firstname}</span> : null}

                                    <label for="lastname" className='text-primarytext mb-2 mt-2'> Lastname</label>
                <input 
                 id="lastname"
                name='lastname'
                type="name"
                 placeholder="Enter Lastname" 
                 value={values.lastname}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                                                     { errors.lastname && touched.lastname ? <span className='form-error text-red-500' >{errors.lastname}</span> : null}

<label for="email" className='text-primarytext mb-2 mt-2'>Enter your email ID</label>
                <input 
                 id="email"
                name='email'
                type="email"
                 placeholder="Enter Email" 
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                                                     { errors.email && touched.email ? <span className='form-error text-red-500' >{errors.email}</span> : null}

                  <label for="password" className='text-primarytext mb-2 mt-2'>Password</label>
                <input 
                 id="password"
                name='password'
                type="password"
                 placeholder="Create a Password" 
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                     { errors.password && touched.password ? <span className='form-error text-red-500' >{errors.password}</span> : null}

                    <label for="password_confirmation" className='text-primarytext mb-2 mt-2'>Confirm Password</label>
                <input 
                 id="password_confirmation"
                name='password_confirmation'
                type="password"
                 placeholder="Confirm Password" 
                 value={values.password_confirmation}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                                                     { errors.confirm_password && touched.confirm_password ? <span className='form-error text-red-500' >{errors.confirm_password}</span> : null}

                <button type="submit" className="px-4 py-2 mt-6 bg-primarybtn  text-white  transition duration-300 ease-in-out rounded-lg font-medium">Register</button>
            </form>
            <div className="flex items-center justify-center mt-5 mb-5 ">
      <hr className="border-t border-gray-300 flex-1 mr-1 line-width" />
      <span className="text-gray-500 font-medium mx-1">OR</span>
      <hr className="border-t border-gray-300 flex-1 ml-1 line-width" />
    </div>
    {/* <GoogleLogin 
  clientId={clientID}
  buttonText="Continue with Google"
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  onSuccess={onSuccess}
  onFailure={onFailure}
  className="w-full justify-center google_btn "
/> */}
<div id='signInDiv'></div>
<div className='flex mt-8'>
<p className='mr-2'>Already have an account?</p>
<Link to="/" className='text-primarytext font-bold'>Sign In</Link>
</div>
            </div>

        </div>
        </div>
    );
}

export default Signup;
