import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
  
  body {
    background-color: ${props => props.theme.colors.background};
    color: #333;
    font-family: 'Roboto', sans-serif;
  }
`