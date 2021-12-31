import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      black: string;
      white: string;
      blue: string;
      green: string;
    };
    distance: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
