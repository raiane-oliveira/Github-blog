import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: ${(props) => props.theme['base-border']};
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem "Nunito", sans-serif;
  }
`
