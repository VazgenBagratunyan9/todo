import styled ,{createGlobalStyle} from "styled-components"



export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: sans-serif;
  }

  input {
    padding: 5px;
    width: 300px;
  }

  button {
    padding: 5px 10px;
    border: none;
    background: ${props => props.theme.buttonColor.background};
    color: ${props => props.theme.buttonColor.color};;
  }
  
`