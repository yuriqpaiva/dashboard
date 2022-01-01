import * as React from 'react';

interface SelectChamadaProps {
  value: string;
  setEstado: (value: string) => void;
}

const SelectChamada: React.FC<SelectChamadaProps> = ({
  value,
  setEstado: setState,
}) => {
  return (
    <td className="tableText">
      <select
        className="selectChamada tableText"
        name="chamada"
        value={value}
        onChange={(event) => {
          setState(event.target.value);
        }}
      >
        <option value="em curso">em curso</option>
        <option value="em selecao de fluxo">em selecao de fluxo</option>
        <option value="chamando">chamando</option>
      </select>
    </td>
  );
};

export default SelectChamada;
