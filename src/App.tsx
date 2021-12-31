import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      Testando Roboto
    </ThemeProvider>
  );
};

export default App;
