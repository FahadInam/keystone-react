import React from 'react';
import EditIcon from "../../assets/icons/EditIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";

const TableRow = ({ row }) => {
    const handleEdit = () => {
        // Add your edit logic here
        console.log('Edit clicked', row);
      };
    
      const handleDelete = () => {
        // Add your delete logic here
        console.log('Delete clicked', row);
      };
      return (
        <tr>
          {Object.values(row).map((value, index) => (
            <td key={index} className=" px-4 py-2  text-center">
              {value}
            </td>
          ))}
          <td className=" px-4 py-2 text-center">
            <button onClick={handleEdit} className="text-blue-500">
            <EditIcon height="1.5rem" width="1.5rem"  />
            </button>
            <button onClick={handleDelete} className="text-red-500 ml-4">
            <DeleteIcon height="1.5rem" width="1.5rem" />
            </button>
          </td>
        </tr>
      );
    };

export default TableRow;
