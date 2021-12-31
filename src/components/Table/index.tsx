import * as React from 'react';

import Chamada from '../../interfaces/Chamada';
import { editIcon } from '../icons';
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
          <TableData tableHead>Opções</TableData>
        </tr>
      </thead>
      <tbody>
        {chamadas.map((chamada, index) => {
          const tableRowColor =
            index % 2 === 0 ? 'tableRowWhite' : 'tableRowGray';
          return (
            <tr key={chamada.id} className={tableRowColor}>
              <TableData>{chamada.id}</TableData>
              <TableData>{chamada.origem}</TableData>
              <TableData>{chamada.destino}</TableData>
              <TableData>{chamada.estado}</TableData>
              <TableData>
                <span className="editIcon">{editIcon}</span>
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
