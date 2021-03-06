import * as React from 'react';

interface TableDataProps {
  children?: React.ReactNode;
  tableHead?: boolean;
}

const TableData: React.FC<TableDataProps> = ({ children, tableHead }) => {
  const tableHeadClass = tableHead ? 'tableHead' : '';

  return (
    <td className={`tableData ${tableHeadClass}`}>
      <div className="tableText">{children}</div>
    </td>
  );
};

export default TableData;
