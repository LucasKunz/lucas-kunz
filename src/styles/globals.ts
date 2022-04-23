import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: ${props => props.theme.colors.background};
    color: #333;
    font-family: 'Roboto', sans-serif;
  }
`