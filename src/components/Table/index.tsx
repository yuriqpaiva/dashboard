import * as React from 'react';

import Chamada from '../../interfaces/Chamada';
import TableData from './components/TableData';

interface TableProps {
  chamadas: Chamada[];
}

const Table: React.FC<TableProps> = ({ chamadas }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <TableData tableHead>ID</TableData>
          <TableData tableHead>Origem</TableData>
          <TableData tableHead>Destino</TableData>
          <TableData tableHead>Estado</TableData>
        </tr>
      </thead>
      <tbody>
        {chamadas.map((chamada) => {
          return (
            <tr key={chamada.id}>
              <TableData>{chamada.id}</TableData>
              <TableData>{chamada.origem}</TableData>
              <TableData>{chamada.destino}</TableData>
              <TableData>{chamada.estado}</TableData>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
