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
import { deleteRequest  } from "../../services/api";
import { put  } from "../../services/api";
import Alert from '../smallcomponents/Alert';

import DynamicTable from '../Table/DynamicTable';
const initialValues = {
    gl_code: "",
    name: "",
    description: "",
    commodity_group_id: "",
    rate_by_id: "",
    active_status: false,
  }

function Commodity() {

    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [commodityGroups, setCommodityGroups] = useState([]);
  const [defaultRate, setdefaultRate] = useState([]);
  const [selectedCommodityGroup, setSelectedCommodityGroup] = useState('');
  const [selectedDefaultRate, setSelectedDefaultRate] = useState('');
  const [tableData, settableData] = useState([]);
  const [currentAction, setCurrentAction] = useState("Add");
  const [fetchCommodity, setFetchCommodity] = useState("");
  const [fetchRate, setFetchRate] = useState("");
  const [fetchStatus, setfetchStatus] = useState("");
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });

  const [updateid, setUpdateId] = useState(null);


  const CreateTitle = "Add new commodities"
  const headers = ['Commodity Code / GL Revenue Code', 'Commodity Name', 'Commodity Group' , 'Default Rate by', 'Commodity Status', 'Action' ];
  const data = [
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Active'   },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Inactive'  },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Active'   },

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

  const handleEditAction = (id) => {
  
    // Open the modal   
    setIsModalOpen(true);
    setUpdateId(id);
    setCurrentAction("")
    FetchDataToEdit(id);

  };

  const FetchDataToEdit = async (id) => {
    try {
      const response = await get(`/api/v1/commodities/${id}` ,
      authToken);
      console.log(response)
      values.gl_code = response.data.gl_code
       values.name = response.data.name
     values.description = response.data.description
     values.commodity_group_id = response.data.commodity_group_id.id
     values.rate_by_id = response.data.rate_by_id.id
    //   values.rate_by_id = response.data.rate_by_id
    // response.active_status
    
     setFetchCommodity(response.data.commodity_group_id.name)
     setFetchRate( response.data.rate_by_id.name)
    //  setfetchStatus(response.data.active_status)

     if(response.data.active_status === "Active")
     {
      values.active_status = false
    }
    else{
      values.active_status = true

    }
    //  console.log(fetchStatus)

    } catch (error) {
      console.error('Error fetching commodity data:', error);
    }
  }
  const handleDeleteAction = (id) => {
  console.log(id)
    // Open the modal
    // setIsModalOpen(true);
    // setCurrentAction("")
    // FetchDataToEdit(id);
    DeleteDataFromRow(id);
  };
const DeleteDataFromRow = async (id) => {
  try{
    const response =  await deleteRequest(`http://192.168.100.65:8000/api/v1/commodities/${id}` ,
    authToken);
    fetchCommodities(); // Re-fetch the list of commodities after deleting
    console.log(response)
  }
  catch (error)
{
  console.error('Error', error)
}}
const useCustomFormik = (initialValues, currentAction, updateid, authToken) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { resetForm }) => {
            const data = {
        gl_code: values.gl_code,
        name: values.name,
        description: values.description,
        commodity_group_id: values.commodity_group_id,
        rate_by_id: values.rate_by_id,
        active_status: values.active_status,
      };
      console.log(data);
      if (currentAction === 'Add') {
        try {
          const response = await post('/api/v1/commodities', data, authToken);
          if (response.status) {
            setIsModalOpen(false);
            setAlert({ show: true, message: 'Commodity Added Successfully!', type: 'success'  });
            resetForm();     
               }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('id', updateid);
        try {
          const response = await put(`/api/v1/commodities/${updateid}`, data, authToken);
          if (response.status) { // Check for a specific status code
            setIsModalOpen(false);
            values.gl_code = ""

            resetForm();    
                }
        } catch (error) {
          console.error('Error updating the commodity:', error);
        }
      }
    },
  });

  return formik;
};

const formik = useCustomFormik(initialValues, currentAction, updateid, authToken);
const {
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  setFieldValue,
  resetForm
} = formik;

const fetchCommodities = async () => {
  try {
    const response = await get('/api/v1/commodities', authToken);
    // if (Array.isArray(response.data)) {
    //   settableData(response.data);
    //   console.log(tableData)
    // }
    settableData(response.data.map(item => ({
      id: item.id,
      CommodityCode: item.gl_code,
      CommodityName: item.name,
      CommodityGroup: item.commodity_group_id,
      DefaultRateby: item.rate_by_id,
      CommodityStatus: item.active_status
    })));
  } catch (error) {
    console.error('Error fetching commodities:', error);
  }
};
useEffect(() => {
  if (!isModalOpen) {
    fetchCommodities();
  }
}, [isModalOpen]);

useEffect(() => {
  fetchCommodities();
}, []);


const handleCheckboxChange = (e) => {
  const newCheckedValue = !isChecked;
  setIsChecked(newCheckedValue);
  setFieldValue('active_status', newCheckedValue);
};

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentAction("Add")
    console.log(currentAction)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();

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
<Alert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      />
      <DynamicTable headers={headers} data={tableData} onEdit={handleEditAction} onDelete={handleDeleteAction} />
      </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} >
      <form onSubmit={handleSubmit}>
          <h1 className='text-3xl font-semibold text-center mb-10'> {currentAction === "Add" ? CreateTitle : "Update Commodity"}</h1>

        <div className='flex justify-between'>
            <div> 
                
            <label htmlFor="gl_code" className='text-primarytext mb-2'>Commodity Code</label>

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
            <label htmlFor="name" className='text-primarytext mb-2'>Commodity Name</label>

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
             <label htmlFor="description" className='text-primarytext mb-2'>Description</label>
             <textarea 
    id="description"
    name='description'
    type="text" 
    value={values.description}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Enter Commodity Description"
    className="px-4 py-2 border border-gray-400 rounded modal_btn_custom h-32 w-full focus:ring-transparent"
/>
        </div>
        <div className='flex mt-6'>
            <div className='commodity_dropdown_div'>
            <p className='text-primarytext'>Commodity Group</p>
            <Dropdown
  id="commodity_group_id"
  name='commodity_group_id'
  values={commodityGroups.map((group) => group.name)}
  value={commodityGroups.find((group) => group.id === values.commodity_group_id)?.name || ''}
  onChange={(value) => {
    const selectedGroup = commodityGroups.find((group) => group.name === value);
    if (selectedGroup) {
      setFieldValue('commodity_group_id', selectedGroup.id);
      setSelectedCommodityGroup(selectedGroup.id);
    } else {
      setFieldValue('commodity_group_id', '');
      setSelectedCommodityGroup('');
    }
  }}
  onAddMore={(value) => {
    PostCommodityGroup(value);
  }}
  onFetchedCommodity={fetchCommodity}
/>
</div>
<div className='commodity_dropdown_div '>
<p className='text-primarytext'>Default Rate by</p>


<Dropdown
  id="rate_by_id"
  name='rate_by_id'
  className="float-right"
  values={defaultRate.map((group) => group.name)}
  value={defaultRate.find((group) => group.id === values.rate_by)?.name || ''}
  onChange={(value) => {
    const selectedRate = defaultRate.find((group) => group.name === value);
    if (selectedRate) {
      setFieldValue('rate_by_id', selectedRate.id);
      setSelectedDefaultRate(selectedRate.id);
    } else {
      setFieldValue('rate_by_id', '');
      setSelectedDefaultRate('');
    }
  }}
  onAddMore={(value) => {
    PostDefaultRate(value);
  }}
  onFetchedRate={fetchRate}
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
            id="active_status"
            className="form-checkbox text-custom-gray h-4 w-4 rounded "
            checked={isChecked}
            value={isChecked}

            readOnly
          />
          <label htmlFor="active_status" className="ml-2 text-zinc-600">
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
{currentAction === "Add" ? "Add Commodity" : "Update Commodity"}
</button>

      </div>
      </form>
      </Modal>
    </div>
  );
}

export default Commodity;