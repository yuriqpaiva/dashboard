import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Counter from './components/Counter';
import { homeIcon } from './components/icons';
import LoadingScreen from './components/Loading';
import MostrarMais from './components/MostrarMais';
import Status from './components/Status';
import Table from './components/Table';
import { countStatusChamada } from './functions/countStatusChamadas';
import { filterChamadas } from './functions/filterChamadas';
import { useDialogStatusData } from './hooks/useDialogStatusData';
import Chamada from './interfaces/Chamada';
import ChamadaCounter from './interfaces/ChamadaCounter';
import { getChamadasFromAPI } from './services/getChamadas';
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
  const [loading, setLoading] = React.useState(true);
  const [mostrarMais, setMostrarMais] = React.useState(false);

  const handleMostrarMais = React.useCallback(() => {
    mostrarMais ? setMostrarMais(false) : setMostrarMais(true);
  }, [mostrarMais]);

  const updateChamadas = React.useCallback(() => {
    getChamadasFromAPI().then((newChamadas) => {
      setChamadas(newChamadas);
      setChamadasCounter(countStatusChamada(newChamadas));
      newChamadas.length > 5 ? setMostrarMais(true) : setMostrarMais(false);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    updateChamadas();
  }, [updateChamadas]);

  const { statusUpdate, showDialogStatusUpdate } = useDialogStatusData();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Home>
          <h1 className="title">
            <span className="titleIcon">{homeIcon}</span>Bem vindo(a) ao
            Dashboard,
          </h1>
          <p>Aqui você obtém acesso às principais informações da API</p>
          <Counter updateChamadas={updateChamadas} />
          {mostrarMais ? (
            <Table
              chamadas={filterChamadas(chamadas)}
              setChamadasCounter={setChamadasCounter}
            />
          ) : (
            <Table
              chamadas={chamadas}
              setChamadasCounter={setChamadasCounter}
            />
          )}
          {mostrarMais && <MostrarMais onClick={handleMostrarMais} />}
          <Status chamadasCounter={chamadasCounter} />
          {statusUpdate && showDialogStatusUpdate()}
        </Home>
      )}
    </ThemeProvider>
  );
};

export default App;
