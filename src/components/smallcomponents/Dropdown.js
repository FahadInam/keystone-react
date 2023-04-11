import React, { useState } from 'react';

const Dropdown = ({ values, onAddMore }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('Select Value');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddMoreClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    onAddMore(inputValue);
    setSelectedValue(inputValue);
    setShowInput(false);
    setInputValue('');
  };

  const handleValueClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full ">
      <button
        className="text-left  w-11/12  rounded-md border h-12 border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium  modal_btn_custom text-gray-500 "
        onClick={toggleDropdown}
      >
        {selectedValue}
       
      </button>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  w-11/12">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {values.map((value, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleValueClick(value)}
              >
                {value}
              </button>
            ))}
            {showInput ? (
              <div className="flex px-4 py-2">
                <input
                  className="border border-gray-300 text-sm w-full mr-2 rounded-md"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  className="text-sm bg-blue-500 text-white py-1 px-2 rounded-md"
                  onClick={handleInputSubmit}
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={handleAddMoreClick}
              >
                Add more
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
