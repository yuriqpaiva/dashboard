import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import Table from './components/Table';
import GlobalStyle from './styles/global';
import MainPage from './styles/home';
import { defaultTheme } from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainPage>
        <h1 className="title">Bem vindo ao Dashboard</h1>
        <p>Aqui você obtém acesso às principais informações da API</p>
        <Table />
      </MainPage>
    </ThemeProvider>
  );
};

export default App;
