import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    shadow: string;
    palette: {
      black: string;
      white: string;
      blue: string;
      green: string;
      yellow: string;
      red: string;
      gray: string;
      softGray: string;
    };
    distance: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
  }
}
