import * as React from 'react';

interface MostrarMaisProps {
  onClick: () => void;
}

const MostrarMais: React.FC<MostrarMaisProps> = ({ onClick }) => {
  return (
    <button className="mostrarMais" onClick={() => onClick()}>
      Mostrar Mais
    </button>
  );
};

export default MostrarMais;
