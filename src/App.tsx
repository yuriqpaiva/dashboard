import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Counter from './components/Counter';
import { homeIcon } from './components/icons';
import MostrarMais from './components/MostrarMais';
import Status from './components/Status';
import Table from './components/Table';
import { counterInSecondsInterval, setCounterToMS } from './data/counter';
import { countStatusChamada } from './functions/countStatusChamadas';
import { filterChamadas } from './functions/filterChamadas';
import { getChamadasFromAPI } from './functions/getChamadas';
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

  const [counterNumber, setCounterNumber] = React.useState(
    counterInSecondsInterval
  );

  const resetCounter = () => {
    setCounterNumber(counterInSecondsInterval);
  };

  const [mostrarMais, setMostrarMais] = React.useState(true);

  const handleMostrarMais = () => {
    mostrarMais ? setMostrarMais(false) : setMostrarMais(true);
  };

  React.useEffect(() => {
    const updateChamadas = () => {
      getChamadasFromAPI().then((newChamadas) => {
        setChamadas(newChamadas);
        setChamadasCounter(countStatusChamada(newChamadas));
        if (newChamadas.length <= 5) {
          handleMostrarMais();
        }
      });
    };

    updateChamadas();
    setInterval(() => {
      updateChamadas();
      resetCounter();
    }, setCounterToMS(counterInSecondsInterval));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home>
        <h1 className="title">
          <span className="titleIcon">{homeIcon}</span>Bem vindo(a) ao
          Dashboard,
        </h1>
        <p>Aqui você obtém acesso às principais informações da API</p>
        <Counter
          counterNumber={counterNumber}
          setCounterNumber={setCounterNumber}
        />
        {mostrarMais ? (
          <Table chamadas={filterChamadas(chamadas)} />
        ) : (
          <Table chamadas={chamadas} />
        )}
        {mostrarMais && <MostrarMais onClick={handleMostrarMais} />}
        <Status chamadasCounter={chamadasCounter} />
      </Home>
    </ThemeProvider>
  );
};

export default App;
