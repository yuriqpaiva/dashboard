import Chamada from '../interfaces/Chamada';
import ChamadaCounter from '../interfaces/ChamadaCounter';

const countStatusChamada = (chamadas: Chamada[]): ChamadaCounter => {
  let emCursoCounter = 0;
  let emSelecaoDeFluxoCounter = 0;
  let chamandoCounter = 0;

  chamadas.forEach((chamada) => {
    if (chamada.estado === 'em curso') {
      emCursoCounter++;
    } else if (chamada.estado === 'em selecao de fluxo') {
      emSelecaoDeFluxoCounter++;
    } else if (chamada.estado === 'chamando') {
      chamandoCounter++;
    }
  });

  return {
    emCurso: emCursoCounter,
    emSelecaoDeFluxo: emSelecaoDeFluxoCounter,
    chamando: chamandoCounter,
  };
};

export { countStatusChamada };
