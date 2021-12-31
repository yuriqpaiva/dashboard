import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Status from './components/Status';
import Table from './components/Table';
import { countStatusChamada } from './functions/countStatusChamadas';
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

  React.useEffect(() => {
    const updateChamadas = () => {
      getChamadasFromAPI().then((newChamadas) => {
        setChamadas(newChamadas);
        setChamadasCounter(countStatusChamada(newChamadas));
      });
    };

    updateChamadas();
    setInterval(() => {
      updateChamadas();
    }, 60000);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home>
        <h1 className="title">Bem vindo ao Dashboard,</h1>
        <p>Aqui você obtém acesso às principais informações da API</p>
        <Table chamadas={chamadas} />
        <Status chamadasCounter={chamadasCounter} />
      </Home>
    </ThemeProvider>
  );
};

export default App;
