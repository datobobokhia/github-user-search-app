import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${(props) => (props.darkMode ? "#141d2f" : "#F2F2F2")};
  }

`;
