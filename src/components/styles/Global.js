import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${(props) => (props.darkMode ? "#141d2f" : "#F2F2F2")};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    body {
      display: block;
    }
 
  }

`;
