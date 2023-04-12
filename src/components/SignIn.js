import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useFormik } from 'formik';
import { SignInSchema } from '../Schemas';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode"
import { useState, useEffect } from 'react';
import { post  } from "../services/api";

const initialValues = {
    email: "",
    password: ""
}
// const clientID = "675235851160-0k73mjp56b95cfqtql3hea3r8bss4046.apps.googleusercontent.com";
function Signin() { 
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        width: "500",
      });
  
    }, []);
  
    const handleCredentialResponse = (response) => {
      console.log("Credential Response:", response);
      var userdata = jwt_decode(response.credential)
      console.log(userdata)
      const googleId = userdata.sub;
      const firstName = userdata.given_name;
      const lastName = userdata.family_name;
      const email = userdata.email;
      const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        google_id : googleId
      }
       console.log ("here")
    
      // Handle the Google Sign-In response (e.g., send the response to your API for authentication)
      saveUserData(data);
    };
    function saveToLocalStorage(id, token, firstname, lastname) {
      localStorage.setItem('userId', id);
      localStorage.setItem('authToken', token);
      localStorage.setItem('firstname', firstname);
      localStorage.setItem('lastname', lastname);

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
          
              saveUserData(data);

        }
    })
    const saveUserData = async (data) => {
      try {
        // Update the API endpoint to use a relative path
        const response = await post('/api/v1/login', data);
        const id = response.data.user.id;
        const token = response.data.token;
        const firstname = response.data.user.firstname;
        const lastname = response.data.user.lastname;
    
        saveToLocalStorage(id, token, firstname, lastname);
        console.log(response.data.user.company.companyname)
        if (response.data.user.company.companyname === null) {
          navigate('/companyonboard');
        } else {
          navigate('/invite');
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.log("Account not verified.");
          dispatch({ type: 'SET_EMAIL', email: values.email }); // Update the email state
          navigate('/verify');
        } else {
          console.log("Error:", error);
        }
      }
    }
    
    
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

                 className="px-4 py-2  border-gray-400 rounded h-12  btn_custom focus:ring-transparent"
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

                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom focus:ring-transparent"

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
    {/* <GoogleLogin 
  clientId={clientID}
  buttonText="Continue with Google"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  className="w-full justify-center google_btn "
/> */}
<div id='signInDiv'></div>

<div className='flex mt-8'>
<p className='mr-2'>Don’t have an account?</p>
<Link to="/signup" className='text-primarytext font-bold'>Sign up</Link>
</div>
            </div>

        </div>
    );
}

export default Signin;
