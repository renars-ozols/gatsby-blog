import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    line-height: 1.6;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.grey};
  }
`
export default GlobalStyle
