import styled from "styled-components";

export const StyledUserInput = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  input {
    border: none;
    width: 100%;
    height: 60px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4b6a9b")};
    border-radius: 15px;
    background: ${(props) => (props.darkMode ? "#1E2A47" : "#fefefe")};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    background-image: url("/assets/photo/icon-search.svg");
    background-repeat: no-repeat;
    background-position: 15px;
    padding-left: 48px;
    padding-right: 100px;
    flex-grow: 2;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 84px;
    height: 46px;
    background: #0079ff;
    border-radius: 10px;
    border: none;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    margin-left: -90px;
    cursor: pointer;
  }

  button:hover {
    background-color: #60abff;
  }
  p {
    display: ${(props) => (props.noResult ? "block" : "none")};
    position: absolute;
    right: 140px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #f74646;
  }
`;
