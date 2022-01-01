import * as React from 'react';

import tableHeads from '../../data/tableHeads';
import { updateChamada } from '../../functions/updateChamada';
import { useDialogStatusData } from '../../hooks/useDialogStatusData';
import Chamada from '../../interfaces/Chamada';
import { cancelIcon, checkIcon, editIcon } from '../icons';
import SelectChamada from './components/SelectChamada';
import TableData from './components/TableData';

interface TableProps {
  chamadas: Chamada[];
}

const Table: React.FC<TableProps> = ({ chamadas }) => {
  const [allowEdit, setAllowEdit] = React.useState(false);
  const [chosedId, setChosedId] = React.useState<number>(null);
  const [estado, setEstado] = React.useState<string>(null);

  const { setStatusUpdate } = useDialogStatusData();

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeads.map((tableHead, index) => {
            return (
              <TableData key={index} tableHead>
                {tableHead}
              </TableData>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {chamadas.map((chamada, index) => {
          const tableRowColor =
            index % 2 === 0 ? 'tableRowWhite' : 'tableRowGray';
          return (
            <tr key={chamada.id} className={`${tableRowColor}`}>
              <TableData>{chamada.id}</TableData>
              <TableData>{chamada.origem}</TableData>
              <TableData>{chamada.destino}</TableData>
              {allowEdit && chamada.id === chosedId ? (
                <>
                  <SelectChamada value={estado} setEstado={setEstado} />
                  <TableData>
                    <div className="iconContainer">
                      <span
                        className="icon greenIcon scaleItem"
                        title="Confirmar Operação"
                        onClick={() => {
                          updateChamada(chamada.id, chamada.estado).then(
                            (res) => setStatusUpdate(res.status)
                          );
                          setAllowEdit(false);
                          chamada.estado = estado;
                        }}
                      >
                        {checkIcon}
                      </span>
                      <span
                        className="icon redIcon scaleItem"
                        title="Cancelar Operação"
                        onClick={() => {
                          setAllowEdit(false);
                        }}
                      >
                        {cancelIcon}
                      </span>
                    </div>
                  </TableData>
                </>
              ) : (
                <>
                  <TableData>{chamada.estado}</TableData>
                  <TableData>
                    <span
                      className="icon scaleItem"
                      title="Editar Estado"
                      onClick={() => {
                        setAllowEdit(true);
                        setChosedId(chamada.id);
                        setEstado(chamada.estado);
                      }}
                    >
                      {editIcon}
                    </span>
                  </TableData>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
