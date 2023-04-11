import React, { useState } from 'react';
import Navbar from '../Navbar';
import Navtop from '../Navtop';
import Modal from '../smallcomponents/Modal';
import Dropdown from '../smallcomponents/Dropdown';

function Commodity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
            <div className="flex flex-col mt-16">
              <h4 className="mb-6 font-medium text-3xl leading-8">
                Add Commodity
              </h4>
              <p className="font-medium text-2xl leading-6 text-gray-600">
                Add your new commodity
              </p>
            </div>
            <div className="flex items-end">
            <button
  className=" text-white py-4 px-8 rounded-lg leading-4 btn_css"
  onClick={openModal}
>
  Add Commodity
</button>
            </div>
          </div>
          <hr className="mt-12" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Add modal content here */}
        <h1 className='text-3xl font-semibold text-center mb-10'>Add new commodities</h1>

        <div className='flex justify-between'>
            <div> 
            <label for="gl_code" className='text-primarytext mb-2'>Commodity Code</label>

            <input 
                id="gl_code"
                name='gl_code'
                type="string" 
                placeholder="Enter Commodity Code"
                // value={values.firstname}
                // onChange={handleChange}
                // onBlur={handleBlur}
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
                // value={values.firstname}
                // onChange={handleChange}
                // onBlur={handleBlur}
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
                placeholder="Enter Commodity Description"
                // value={values.firstname}
                // onChange={handleChange}
                // onBlur={handleBlur}
                 className="px-4 py-2 border border-gray-400 rounded  modal_btn_custom h-32 w-full focus:ring-transparent flex flex-col"
                  />
        </div>
        <div className='flex mt-6'>
            <div className='commodity_dropdown_div'>
            <p className='text-primarytext'>Commodity Group</p>
        <Dropdown
  values={['Value 1', 'Value 2', 'Value 3']}
  onAddMore={(value) => {
    console.log('Add more clicked for value:', value);
  }}
/>
</div>
<div className='commodity_dropdown_div '>
<p className='text-primarytext'>Default Rate by</p>

<Dropdown
className="float-right"
  values={['Value 4', 'Value 5', 'Value 6']}
  onAddMore={(value) => {
    console.log('Add more clicked for value:', value);
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
        <button className='text-black py-4 px-8 rounded-lg leading-4 border border-gray-400 mr-2'
        
        onClick={closeModal}
        >Cancel</button>
        <button
  className=" text-white py-4 px-8 rounded-lg leading-4 btn_css ml-2"
>
  Add Commodity
</button>
      </div>
      </Modal>
    </div>
  );
}

export default Commodity;
