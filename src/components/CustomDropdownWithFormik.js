import React, { useState } from "react";
import "../index.css";

const CustomDropdown = ({ options, onOptionClick }) => {
  const [selected, setSelected] = useState("Select an option");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    console.log(option)
    setSelected(option);
    setIsOpen(false);
    // onOptionClick && onOptionClick(option);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="custom-dropdown__selected h-12 text-base flex items-center focus:ring-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected === "Select an option" ? "Select an option" : selected}
      </div>
      {isOpen && (
        <div className="custom-dropdown__options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-dropdown__option h-11 text-base flex items-center ${
                option === selected ? "bg-hoverPrimary hover:bg-hoverPrimary " : ""
              } hover:bg-white`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
