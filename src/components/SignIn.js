import React from 'react';
import { useFormik } from 'formik';
import { SignInSchema } from '../Schemas';
const initialValues = {
    email: "",
    password: ""
}
function Signin() { 

   const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: SignInSchema,
        onSubmit : (values) => {
            console.log(values)
        }
    })
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className='bg-green-50 items-center flex flex-col p-8'>
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input 
                name='email'
                type="email" 
                placeholder="Email"
                 className="px-4 py-2 border border-gray-400 rounded h-12"
                value={values.email }
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                  { errors.email && touched.email ? <span className=''>{errors.email}</span> : null}
                <input 
                name='password'
                type="password"
                 placeholder="Password" 
                 className="px-4 py-2 border border-gray-400 rounded h-12"
                 value={values.password }
                onChange={handleChange}
                onBlur={handleBlur}
                  />
                 { errors.password && touched.password ? <span className='form-error'>{errors.email}</span> : null}

                <button type="submit" className="px-4 py-2   text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out ">Sign In</button>
             

            </form>
            </div>
        </div>
    );
}

export default Signin;
