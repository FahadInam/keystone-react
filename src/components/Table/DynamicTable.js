import React from 'react';
import TableHeader from '../Table/TableHeader';
import TableRow from '../Table/TableRow';

const DynamicTable = ({ headers, data, onEdit , onDelete }) => {
  return (
    <table className="table-auto w-full table-custom">
      <TableHeader headers={headers} />
      <tbody className="space-y-2">
        {data.map((row, index) => (
          <TableRow key={index} row={row}  onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
