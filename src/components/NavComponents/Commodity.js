import React, { useState } from 'react';
import Navbar from '../Navbar';
import Navtop from '../Navtop';
import Modal from '../smallcomponents/Modal';
import Dropdown from '../smallcomponents/Dropdown';
import { CommodityValidation } from '../../Schemas';
import { useFormik } from 'formik';
import axios from 'axios';
import { get  } from "../../services/api";
import  { useEffect } from 'react';
import { post  } from "../../services/api";
import DynamicTable from '../Table/DynamicTable';
const initialValues = {
    gl_code: "",
    name: "",
    description: "",
    commodity_group_id: "",
    rate_by: ""
}

function Commodity() {

    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [commodityGroups, setCommodityGroups] = useState([]);
  const [defaultRate, setdefaultRate] = useState([]);
  const [selectedCommodityGroup, setSelectedCommodityGroup] = useState('');
  const [selectedDefaultRate, setSelectedDefaultRate] = useState('');
  
  const headers = ['Commodity Code / GL Revenue Code', 'Commodity Name', 'Commodity Group' , 'Default Rate by', 'Inactive Commodity', 'Action' ];
  const data = [
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , InactiveCommodity: 'Yes'   },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , InactiveCommodity: 'Yes'  },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , InactiveCommodity: 'Yes'   },

  ];

  

  const authToken = localStorage.getItem('authToken');
  const fetchCommodityGroups = async () => {
    try {
      const response = await get('/api/v1/commodity-groups' ,
      authToken);
      if (Array.isArray(response.data)) {
        setCommodityGroups(response.data);
      }
    } catch (error) {
      console.error('Error fetching commodity groups:', error);
    }
  };
  const fetchdefaultRateBy = async () => {
    try {
      const response = await get('/api/v1/commodities/1/rates' ,
      authToken);
      if (Array.isArray(response.data)) {
        setdefaultRate(response.data);
      }
    } catch (error) {
      console.error('Error fetching default rates:', error);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      fetchCommodityGroups();
      fetchdefaultRateBy();
    }
  }, [isModalOpen]);
  


  const PostCommodityGroup = async (data) => {
    console.log("here")
    const commoditydata = { name: data };
    try {
      const response = await post('/api/v1/commodity-groups' , commoditydata,
      authToken);
      fetchCommodityGroups();

    //   setCommodityGroups(response.data);
    } catch (error) {
      console.error('Error fetching commodity groups:', error);
    }
  };

  const PostDefaultRate = async (data) => {
    const defaultratedata = { name: data };
    try {
      const response = await post('/api/v1/commodities/1/rates' , defaultratedata,
      authToken);
      fetchdefaultRateBy();

    //   setCommodityGroups(response.data);
    } catch (error) {
      console.error('Error fetching commodity groups:', error);
    }
  };

  const {values, errors ,touched ,handleBlur, handleChange, handleSubmit} = useFormik({
    
    initialValues: initialValues,
    validationSchema: CommodityValidation,
    
    onSubmit: async (values) => {
        console.log('Submitting form...');
        const data = {
            gl_code: values.gl_code,
            name: values.name,
            description: values.description,
            commodity_group_id: selectedCommodityGroup, // use the state value here
            rate_by: selectedDefaultRate, // use the state value here
        };
        console.log(data)
        // try {
        //     const response = await axios.post('http://192.168.18.43:8000/api/v1/forgot-password', data);
        //     // dispatch({ type: 'SET_FORGOT_EMAIL', email: values.email }); // Update the email state

        //     // navigate('/emailsent');
        //   } catch (error) {
        //     console.log(error)
        //   }
       
    }
})



  const handleCheckboxChange = (e) => {
    console.log("here")
    setIsChecked(!isChecked);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div className="p-4 navbar_css border-r">
        <Navbar />
      </div>
      <div className="main-body_css">
        <div className="nav-top_css border-b flex justify-end">
          <Navtop />
        </div>
        <div className="main-content_css pl-8 pr-16">
          <div className="flex justify-between">
            <div className="flex flex-col mt-8">
              <h4 className="mb-6 font-medium text-3xl leading-8">
                Add Commodity
              </h4>
              <p className="font-medium text-2xl leading-6 text-gray-600">
                Add your new commodity
              </p>
            </div>
            <div className="flex items-center mt-10">
            <button
  className=" text-white py-4 px-8 rounded-lg leading-4 btn_css"
  onClick={openModal}
  type="button"
>
  Add Commodity
</button>
            </div>
          </div>
          <hr className="mt-12" />

<div className='mt-12'>
      <DynamicTable headers={headers} data={data}  />
      </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit}>
          <h1 className='text-3xl font-semibold text-center mb-10'>Add new commodities</h1>

        <div className='flex justify-between'>
            <div> 
                
            <label for="gl_code" className='text-primarytext mb-2'>Commodity Code</label>

            <input 
                id="gl_code"
                name='gl_code'
                type="string" 
                placeholder="Enter Commodity Code"
                value={values.gl_code}
                onChange={handleChange}
                onBlur={handleBlur}
                 className="px-4 py-2 border border-gray-400 rounded h-12  modal_btn_custom focus:ring-transparent flex flex-col"
                  />
            </div>
            <div> 
            <label for="name" className='text-primarytext mb-2'>Commodity Name</label>

            <input 
                id="name"
                name='name'
                type="text" 
                placeholder="Enter Commodity Code"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                 className="px-4 py-2 border border-gray-400 rounded h-12  modal_btn_custom focus:ring-transparent flex flex-col"
                  />
            </div>
        </div>
        <div className='flex flex-col justify-around mt-6'>
             <label for="description" className='text-primarytext mb-2'>Description</label>

            <input 
                id="description"
                name='description'
                type="text" 
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Commodity Description"
                 className="px-4 py-2 border border-gray-400 rounded  modal_btn_custom h-32 w-full focus:ring-transparent flex flex-col"
                  />
        </div>
        <div className='flex mt-6'>
            <div className='commodity_dropdown_div'>
            <p className='text-primarytext'>Commodity Group</p>
            <Dropdown
  id="commodity_group_id"
  name='commodity_group_id'
  values={commodityGroups.map((group) => group.name)}
  onChange={(value) => setSelectedCommodityGroup(value)}
  onAddMore={(value) => {
    PostCommodityGroup(value);
  }}
/>
</div>
<div className='commodity_dropdown_div '>
<p className='text-primarytext'>Default Rate by</p>


<Dropdown
  id="rate_by"
  name='rate_by'
  className="float-right"
  values={defaultRate.map((group) => group.name)}
  onChange={(value) => setSelectedDefaultRate(value)}
  onAddMore={(value) => {
    PostDefaultRate(value);
  }}
/>

</div>

        </div>
        <div className="mt-4 cursor-pointer">
        <div
          onClick={handleCheckboxChange}
          className="flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="customCheckbox"
            className="form-checkbox text-custom-gray h-4 w-4 rounded "
            checked={isChecked}
            readOnly
          />
          <label htmlFor="customCheckbox" className="ml-2 text-zinc-600">
          Inactive Commodity
          </label>
        </div>
      </div>

      <div className='flex justify-center mt-12'>
      <button
        className="text-black py-4 px-8 rounded-lg leading-4 border border-gray-400 mr-2"
        onClick={closeModal}
        type="button"
      >
        Cancel
      </button>
      <button
  className="text-white py-4 px-8 rounded-lg leading-4 btn_css ml-2"
  type="submit"
  
>
  Add Commodity
</button>

      </div>
      </form>
      </Modal>
    </div>
  );
}

export default Commodity;