import * as React from 'react';

import ChamadaCounter from '../../interfaces/ChamadaCounter';

interface StatusProps {
  chamadasCounter: ChamadaCounter;
}

const Status: React.FC<StatusProps> = ({ chamadasCounter }) => {
  return (
    <div className="status">
      <h2 className="statusTitle">Status das Chamadas</h2>
      <p>
        Em Curso:{' '}
        <span className="statusNumber">{chamadasCounter.emCurso}</span>
      </p>
      <p>
        Em seleção de Fluxo:{' '}
        <span className="statusNumber">{chamadasCounter.emSelecaoDeFluxo}</span>
      </p>
      <p>
        Chamando:{' '}
        <span className="statusNumber">{chamadasCounter.chamando}</span>
      </p>
    </div>
  );
};

export default Status;
