// CustomAlert.js
import React from 'react';

const Alert = ({ message, show, type, onClose }) => {
  if (!show) {
    return null;
  }

  const alertClasses = {
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
  };

  return (
    <div className={`alert p-4 rounded-lg shadow-md ${alertClasses[type]}`}>
      <div className="flex items-center">
        <p className="flex-grow">{message}</p>
        {onClose && (
          <button onClick={onClose} className="text-white ml-3 hover:text-gray-200">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
