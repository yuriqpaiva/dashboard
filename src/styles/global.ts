import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.palette.white};
    font-family: 'Roboto', Sans-Serif;
  }
`;

export default GlobalStyle;
