import * as React from 'react';

interface MostrarMaisProps {
  onClick: () => void;
}

const MostrarMais: React.FC<MostrarMaisProps> = (props) => {
  return (
    <button className="mostrarMais" onClick={() => props.onClick()}>
      Mostrar Mais
    </button>
  );
};

export default MostrarMais;
