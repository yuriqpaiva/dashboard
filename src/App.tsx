import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Counter from './components/Counter';
import { homeIcon } from './components/icons';
import MostrarMais from './components/MostrarMais';
import Status from './components/Status';
import Table from './components/Table';
import { countStatusChamada } from './functions/countStatusChamadas';
import { filterChamadas } from './functions/filterChamadas';
import { getChamadasFromAPI } from './functions/getChamadas';
import { useDialogStatusData } from './hooks/useDialogStatusData';
import Chamada from './interfaces/Chamada';
import ChamadaCounter from './interfaces/ChamadaCounter';
import GlobalStyle from './styles/global';
import Home from './styles/home';
import { defaultTheme } from './styles/themes';

const App: React.FC = () => {
  const [chamadas, setChamadas] = React.useState<Chamada[]>([]);
  const [chamadasCounter, setChamadasCounter] = React.useState<ChamadaCounter>({
    chamando: 0,
    emCurso: 0,
    emSelecaoDeFluxo: 0,
  });

  const [mostrarMais, setMostrarMais] = React.useState(true);

  const handleMostrarMais = React.useCallback(() => {
    mostrarMais ? setMostrarMais(false) : setMostrarMais(true);
  }, [mostrarMais]);

  const updateChamadas = React.useCallback(() => {
    getChamadasFromAPI().then((newChamadas) => {
      setChamadas(newChamadas);
      setChamadasCounter(countStatusChamada(newChamadas));
      if (newChamadas.length <= 5) {
        handleMostrarMais();
      }
    });
  }, [handleMostrarMais]);

  React.useEffect(() => {
    updateChamadas();
  }, [updateChamadas]);

  const { statusUpdate, showDialogStatusUpdate } = useDialogStatusData();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home>
        <h1 className="title">
          <span className="titleIcon">{homeIcon}</span>Bem vindo(a) ao
          Dashboard,
        </h1>
        <p>Aqui você obtém acesso às principais informações da API</p>
        <Counter updateChamadas={updateChamadas} />
        {mostrarMais ? (
          <Table chamadas={filterChamadas(chamadas)} />
        ) : (
          <Table chamadas={chamadas} />
        )}
        {mostrarMais && <MostrarMais onClick={handleMostrarMais} />}
        <Status chamadasCounter={chamadasCounter} />
        {statusUpdate && showDialogStatusUpdate()}
      </Home>
    </ThemeProvider>
  );
};

export default App;
