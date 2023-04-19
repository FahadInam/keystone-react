import React, { useState } from 'react';
import Navbar from '../Navbar';
import Navtop from '../Navtop';
import Dropdown from '../smallcomponents/Dropdown';
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

function Equipment() {

    
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
  const headers = ['Truck Number', 'Truck Type', 'Status' , 'Number of Axles', 'License Plate Number', 'License Plate State', 'IRP Registered',  'Action' ];
  const data = [
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Active'   },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Inactive'  },
    { CommodityCode: 'SH1234', CommodityName: 'Couch', CommodityGroup: 'Furniture', DefaultRateby: 'Flat Amount' , CommodityStatus: 'Active'   },

  ];

  

  const authToken = localStorage.getItem('authToken');
  
  



  
  const handleEditAction = (id) => {
  
    // Open the modal   
    setIsModalOpen(true);
    setUpdateId(id);
    setCurrentAction("")

  };

  
  const handleDeleteAction = (id) => {
  console.log(id)
    // Open the modal
    // setIsModalOpen(true);
    // setCurrentAction("")
    // FetchDataToEdit(id);
  };

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
              Add Equipment
              </h4>
              <p className="font-medium text-2xl leading-6 text-gray-600">
              Add your new Equipment
              </p>
            </div>
            <div className="flex items-center mt-10">
            <button
  className=" text-white py-4 px-8 rounded-lg leading-4 btn_css"
  type="button"
>
Add Equipment
</button>
            </div>
          </div>
          <hr className="mt-12" />

<div className='mt-12'>
{/* <Alert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      /> */}
      <DynamicTable headers={headers} data={tableData} onEdit={handleEditAction} onDelete={handleDeleteAction} />
      </div>
        </div>
      </div>

    
    </div>
  );
}

export default Equipment;