import * as React from 'react';

import mocks from '../../mocks';
import TableData from './components/TableData';

const Table: React.FC = () => {
  return (
    <table className="table">
      <tr>
        <TableData tableHead>ID</TableData>
        <TableData tableHead>Origem</TableData>
        <TableData tableHead>Destino</TableData>
        <TableData tableHead>Estado</TableData>
      </tr>
      <tbody>
        {mocks.map((data) => {
          return (
            <tr key={data.id}>
              <TableData>{data.id}</TableData>
              <TableData>{data.origem}</TableData>
              <TableData>{data.destino}</TableData>
              <TableData>{data.estado}</TableData>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
