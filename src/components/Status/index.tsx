import * as React from 'react';

import ChamadaCounter from '../../interfaces/ChamadaCounter';

interface StatusProps {
  chamadasCounter: ChamadaCounter;
}

const Status: React.FC<StatusProps> = ({ chamadasCounter }) => {
  return (
    <div className="status">
      <h2 className="statusTitle">Status das Chamadas</h2>
      <p>Em Curso: {chamadasCounter.emCurso}</p>
      <p>Em seleção de Fluxo: {chamadasCounter.emSelecaoDeFluxo}</p>
      <p>Chamando: {chamadasCounter.chamando}</p>
    </div>
  );
};

export default Status;
