import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useFormik } from 'formik';
import { SignInSchema } from '../Schemas';
const initialValues = {
    email: "",
    password: ""
}
const clientID = "675235851160-vt3qgar1v9b9khtkqtghgmlta4p8gm1o.apps.googleusercontent.com";
function Signin() { 

   const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: SignInSchema,
        onSubmit : (values) => {
            console.log(values)
        }
    })
    const onSuccess = (res) => {
        console.log("here")
    }
    const onFailure = (res) => {
        console.log("here")
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex flex-col items-center bg-green-50 p-8 signin_css shadow-onboardingShadow'>
            <h2 className="text-3xl font-bold mb-4 ">Login</h2>
            <p className='mb-8'>Welcome back. Please Select Method to Login:</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label for="email" className='text-primarytext mb-2'>Enter your email ID</label>
                <input 
                id="email"
                name='email'
                type="email" 
                placeholder="Email"
                 className="px-4 py-2 border border-gray-400 rounded h-12 mb-4 btn_custom"
                value={values.email }
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                  { errors.email && touched.email ? <span className=''>{errors.email}</span> : null}
                  <label for="password" className='text-primarytext mb-2'> Password</label>
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
                 { errors.password && touched.password ? <span className='form-error'>{errors.email}</span> : null}

                <button type="submit" className="px-4 py-2 mt-6 bg-primarybtn  text-white rounded transition duration-300 ease-in-out">Login</button>
            </form>
            <div className="flex items-center justify-center my-8 ">
      <hr className="border-t border-gray-300 flex-1 mr-1 line-width" />
      <span className="text-gray-500 font-medium mx-1">OR</span>
      <hr className="border-t border-gray-300 flex-1 ml-1 line-width" />
    </div>
            </div>
            <GoogleLogin 
            clientId = {clientID}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
            />

        </div>
    );
}

export default Signin;
