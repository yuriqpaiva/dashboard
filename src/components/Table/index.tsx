import * as React from 'react';

import tableHeads from '../../data/tableHeads';
import { countStatusChamada } from '../../functions/countStatusChamadas';
import { useDialogStatusData } from '../../hooks/useDialogStatusData';
import Chamada from '../../interfaces/Chamada';
import ChamadaCounter from '../../interfaces/ChamadaCounter';
import { updateChamadaFromAPI } from '../../services/updateChamada';
import { cancelIcon, checkIcon, editIcon } from '../icons';
import SelectChamada from './components/SelectChamada';
import TableData from './components/TableData';

interface TableProps {
  chamadas: Chamada[];
  setChamadasCounter: (value: ChamadaCounter) => void;
}

const Table: React.FC<TableProps> = ({ chamadas, setChamadasCounter }) => {
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
                        className="tableIcon greenIcon scaleItem"
                        title="Confirmar Operação"
                        onClick={async () => {
                          await updateChamadaFromAPI(
                            chamada.id,
                            chamada.estado
                          ).then((res) => {
                            setStatusUpdate(res.status);
                            if (res.status === 200) {
                              chamada.estado = estado;
                              setChamadasCounter(countStatusChamada(chamadas));
                            }
                            setChosedId(null);
                          });
                          setAllowEdit(false);
                        }}
                      >
                        {checkIcon}
                      </span>
                      <span
                        className="tableIcon redIcon scaleItem"
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
                      className="tableIcon scaleItem"
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
