import styled from "styled-components";

export const StyledUserInfo = styled.section`
  position: relative;
  top: 16px;
  width: 75%;
  margin: auto;
  height: 517px;
  background: ${(props) => (props.darkMode ? "#1e2a47" : "#ffffff")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 117px;
    height: 117px;
    border-radius: 50%;
  }

  P {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;

    color: #4b6a9b;
  }

  h2 {
    margin: 0px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;

    color: #2b3442;
  }

  h5 {
    margin: 0px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0079ff;
  }

  h3 {
    margin: 0px;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: #697c9a;
  }
  @media (max-width: 600px) {
    width: 90%;

    img {
      width: 70px;
      height: 70px;
    }
    h2 {
      font-size: 16px;
      line-height: 24px;
    }

    h3 {
      font-size: 13px;
      line-height: 19px;
    }

    h5 {
      font-size: 13px;
      line-height: 19px;
    }
    p {
      font-size: 13px;
      line-height: 25px;
    }
  }
`;

export const StyledUserInfoInnerContent = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledUserInfoHeader = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledUserInfoHeaderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: ${(props) => (props.darkMode ? "#ffffff" : "#2b3442")};
  }
`;

export const StyledUserInfoQuantities = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  background: ${(props) => (props.darkMode ? "#141d2f" : "#f6f8ff")};
  border-radius: 10px;
  height: 85px;
  align-items: center;

  p {
    margin: 0px;
    text-align: center;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;

    text-align: center;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#4b6a9b")};
  }

  h3 {
    text-align: center;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    text-transform: uppercase;

    text-align: center;
    text-transform: uppercase;
    color: ${(props) => (props.darkMode ? "#ffffff" : "#2b3442")};
  }
  @media (max-width: 600px) {
    p {
      font-size: 11px;
      line-height: 16px;
    }

    h3 {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const StyledUserSocialActivity = styled.div`
  width: 100%;
  height: 127px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  img {
    width: 20px;
    height: 20px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  p {
    margin: 0px;
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: 800px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 13px;
      line-height: 19px;
    }
  }
`;
