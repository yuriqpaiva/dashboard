import * as React from 'react';

interface TableDataProps {
  children?: React.ReactNode;
  tableHead?: boolean;
  gray?: boolean;
}

const TableData: React.FC<TableDataProps> = ({ children, tableHead, gray }) => {
  const tableHeadClass = tableHead ? 'tableHead' : '';
  const grayClass = gray ? 'gray' : '';

  return (
    <td className={`tableData ${tableHeadClass} ${grayClass}`}>{children}</td>
  );
};

export default TableData;
