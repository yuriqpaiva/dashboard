import * as React from 'react';

import { getChamadasFromAPI } from '../../functions/getChamadas';
import Chamada from '../../interfaces/Chamada';
import TableData from './components/TableData';

const Table: React.FC = () => {
  const [chamadas, setChamadas] = React.useState<Chamada[]>([]);

  React.useEffect(() => {
    const updateChamadas = () => {
      getChamadasFromAPI().then((newChamadas) => setChamadas(newChamadas));
    };

    updateChamadas();
    setInterval(() => {
      updateChamadas();
    }, 60000);
  }, []);

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
