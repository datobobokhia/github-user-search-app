import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 78px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  h1 {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#222731")};
  }
  h4 {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 2.5px;
    color: #4b6a9b;
  }
`;
