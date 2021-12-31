import Chamada from '../interfaces/Chamada';

const filterChamadas = (chamadas: Chamada[]): Chamada[] => {
  return chamadas.filter((_, index) => index < 5);
};

export { filterChamadas };
