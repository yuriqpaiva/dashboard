import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import MostrarMais from './components/MostrarMais';
import Status from './components/Status';
import Table from './components/Table';
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

  const [mostrarMais, setMostrarMais] = React.useState(true);

  const handleMostrarMais = () => {
    mostrarMais ? setMostrarMais(false) : setMostrarMais(true);
  };

  React.useEffect(() => {
    const updateChamadas = () => {
      getChamadasFromAPI().then((newChamadas) => {
        setChamadas(newChamadas);
        setChamadasCounter(countStatusChamada(newChamadas));
        if (newChamadas.length < 5) {
          handleMostrarMais();
        }
      });
    };

    updateChamadas();
    setInterval(() => {
      updateChamadas();
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home>
        <h1 className="title">Bem vindo ao Dashboard,</h1>
        <p>Aqui você obtém acesso às principais informações da API</p>
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
