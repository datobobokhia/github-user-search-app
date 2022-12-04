import styled from "styled-components";

export const StyledUserInput = styled.section`
  display: flex;
  align-items: center;
  width: 75%;
  margin: auto;
  input {
    border: none;
    width: 100%;
    height: 69px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "#4b6a9b")};
    border-radius: 15px;
    background: ${(props) => (props.darkMode ? "#1E2A47" : "#fefefe")};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    background-image: url("/assets/photo/icon-search.svg");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 32px;
    padding-left: 80px;
    padding-right: 100px;
    flex-grow: 2;
  }

  input::placeholder {
    opacity: ${(props) => (props.noResult ? "0" : "1")};
  }
  input::-webkit-input-placeholder {
    opacity: ${(props) => (props.noResult ? "0" : "1")};
  }
  input:-moz-placeholder {
    opacity: ${(props) => (props.noResult ? "0" : "1")};
  }
  input::-moz-placeholder {
    opacity: ${(props) => (props.noResult ? "0" : "1")};
  }
  input:-ms-input-placeholder {
    opacity: ${(props) => (props.noResult ? "0" : "1")};
  }

  input:focus {
    outline: none;
  }

  button {
    width: 106px;
    height: 50px;
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
    margin-left: -115px;
    cursor: pointer;
  }

  button:hover {
    background-color: #60abff;
  }
  p {
    display: ${(props) => (props.noResult ? "block" : "none")};
    position: absolute;
    right: 360px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #f74646;
  }

  @media (max-width: 1300px) {
    p {
      right: 320px;
    }
  }

  @media (max-width: 850px) {
    p {
      right: 280px;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    input {
      font-size: 13px;
      height: 60px;
      background-position: 15px;
      padding-left: 48px;
      background-size: 20px;
    }
    button {
      width: 84px;
      height: 46px;
      margin-left: -90px;
    }
    p {
      right: 120px;
    }
  }
`;
