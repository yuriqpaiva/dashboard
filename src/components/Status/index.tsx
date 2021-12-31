import * as React from 'react';

import ChamadaCounter from '../../interfaces/ChamadaCounter';
import { eyeIcon } from '../icons';
import StatusItem from './components/StatusItem';

interface StatusProps {
  chamadasCounter: ChamadaCounter;
}

const Status: React.FC<StatusProps> = ({ chamadasCounter }) => {
  return (
    <div className="status">
      <h2 className="statusTitle">
        <span className="statusIcon">{eyeIcon}</span>
        Status das Chamadas
      </h2>
      <div className="statusItems">
        <StatusItem counter={chamadasCounter.emCurso} classColor="redItem">
          Em Curso
        </StatusItem>
        <StatusItem
          counter={chamadasCounter.emSelecaoDeFluxo}
          classColor="blueItem"
        >
          Em seleção de Fluxo
        </StatusItem>
        <StatusItem counter={chamadasCounter.chamando} classColor="greenItem">
          Chamando
        </StatusItem>
      </div>
    </div>
  );
};

export default Status;
