import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      buttonActived: string;

      
      background: string;
      grayText: string;
      text: string 
    }
  }
}