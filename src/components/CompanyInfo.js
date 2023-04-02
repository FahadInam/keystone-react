import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import logo from '../assets/Logo.png';
import companyimage from '../assets/companyonboard.png';
import { CompanyDetails } from '../Schemas';
import moment from 'moment-timezone';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import 'react-select/dist/react-select.css';

const initialValues = {
    companyname: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    state: "",
    phonenumber: "",
    timezone: "America/New_York"

}
function CompanyInfo() { 
    const timezones = moment.tz.names().map(name => ({
        label: `(GMT${moment.tz(name).format('Z')}) ${name}`,
        value: name,
      }));
      const handlePhoneChange = (value) => {
        handleChange({ target: { name: 'phonenumber', value } });
      };
    
      const handlePhoneBlur = () => {
        handleBlur({ target: { name: 'phonenumber' } });
      };
    const {values, errors ,touched ,handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: CompanyDetails,
        onSubmit : async (values) => {
            console.log(values)
        }
    })
return (
    <div className='flex'>

      <div className="w-1/2">
<div className="flex flex-col items-center justify-center h-screen relative">

<img src={logo} alt="logo" className="ml-20 mt-10 absolute top-0 left-0" />

<div className='flex flex-col items-center bg-primaryBackground p-8 signin_css shadow-onboardingShadow'>
            <h2 className="text-4xl font-bold mb-4 ">Company Information</h2>
            <p className='mb-8 leading-4'>Add the company information</p>
            <form  onSubmit={handleSubmit} className="flex flex-col">
                <label for="dotnumber" className='text-primarytext mb-2'>DOT Number<span className='ml-1 text-gray'>(Optional)</span></label>

                <input 
                id="dotnumber"
                name='dotnumber'
                type="name" 
                // value={values.firstname}
                // onChange={handleChange}
                // onBlur={handleBlur}
                 className="px-4 py-2 border border-gray-400 rounded h-12  btn_custom"
                  />
                 {/* { errors.firstname && touched.firstname ? <span className='form-error text-red-500' >{errors.firstname}</span> : null} */}

                                    <label for="companyname" className='text-primarytext mb-2 mt-2'>Company</label>
                <input 
                 id="companyname"
                name='companyname'
                type="name"
                 placeholder="Enter Company Name" 
                 value={values.companyname}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                                                     { errors.companyname && touched.companyname ? <span className='form-error text-red-500' >{errors.companyname}</span> : null}

<label for="address" className='text-primarytext mb-2 mt-2'>Address</label>
                <input 
                 id="address"
                name='address'
                type="address"
                 placeholder="Enter Address" 
                 value={values.address}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 btn_custom"

                  />
                          { errors.address && touched.address ? <span className='form-error text-red-500' >{errors.address}</span> : null}
                    <div className='flex'>
                        <div className='flex flex-col'>
                  <label for="country" className='text-primarytext mb-2 mt-2'>Country</label>
                <input 
                 id="country"
                name='country'
                type="name"
                 placeholder="Enter Country" 
                 value={values.country}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input mr-6"

                  />              
                         { errors.country && touched.country ? <span className='form-error text-red-500' >{errors.country}</span> : null}
</div>  
<div className='flex flex-col'>
                   <label for="city" className='text-primarytext mb-2 mt-2'>City</label>
                <input 
                 id="city"
                name='city'
                type="name"
                 placeholder="Enter City" 
                 value={values.city}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input"

                  />
                   { errors.city && touched.city ? <span className='form-error text-red-500' >{errors.city}</span> : null}
                  </div>
                  </div>
                  <div className='flex'>
                        <div className='flex flex-col'>
                    <label for="zipcode" className='text-primarytext mb-2 mt-2'>Zip Code</label>
                <input 
                 id="zipcode"
                name='zipcode'
                type="name"
                 placeholder="Enter Zip Code" 
                 value={values.zipcode}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input mr-6"

                  />
                     { errors.zipcode && touched.zipcode ? <span className='form-error text-red-500' >{errors.zipcode}</span> : null}
                                                     </div>  
                                                     <div className='flex flex-col'>

                                                     <label for="state" className='text-primarytext mb-2 mt-2'>State</label>
                <input 
                 id="state"
                name='state'
                type="name"
                 placeholder="Enter State" 
                 value={values.state}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 className="px-4 py-2 border  border-gray-400 rounded h-12 small_input"

                  />
                                                     { errors.state && touched.state ? <span className='form-error text-red-500' >{errors.state}</span> : null}
                                                     </div>
</div>
                                                     <label for="phonenumber" className='text-primarytext mb-2 mt-2'>Phone Number</label>
                                                     <PhoneInput
      id="phonenumber"
      name="phonenumber"
      placeholder="Enter Number"
      value={values.phonenumber}
      onChange={handlePhoneChange}
      onBlur={handlePhoneBlur}
      enableSearch
      country="us"
      inputClass="px-4 py-2 border border-gray-400 rounded h-12 custom_input"
    />
                                                     { errors.phonenumber && touched.phonenumber ? <span className='form-error text-red-500' >{errors.phonenumber}</span> : null}
                                                     <label for="timezone" className='text-primarytext mb-2 mt-2'>Time Zone</label>
                                                   <Select
  id="timezone"
  name="timezone"
  placeholder="Select a timezone"
  options={timezones}
  value={timezones.find((tz) => tz.value === values.timezone)}
  onChange={(selectedOption) => setFieldValue('timezone', selectedOption.value)}
  onBlur={handleBlur}
/>


                                                     { errors.timezone && touched.timezone ? <span className='form-error text-red-500' >{errors.timezone}</span> : null}

                <button type="submit" className="font-semibold mt-6 bg-primarybtn  text-white  transition duration-300 ease-in-out rounded-lg self-end px-12 py-3">Save</button>
            </form>
            

            </div>
</div>
    </div>
    <div className="w-1/2">
    <div className="bg-primaryBackground h-full flex flex-col justify-center items-center relative">
    <h5 className='text-2xl font-semibold mb-12'>Welcome to keystone! to set up your account fill yours company details</h5>
<img src={companyimage} alt="logo" className="" />

        </div>

</div>
    </div>

)
}
export default CompanyInfo;
