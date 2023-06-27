import { StyledUserInput } from "../../styles/UserInput.styled";
import React, { useState, useCallback } from "react";

function UserInput({ setGithubUser, noResult, darkMode }) {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = useCallback(
    (event) => {
      setUserInput(event.target.value);
    },
    [setUserInput]
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setGithubUser(userInput);
      setUserInput("");
    }
  };

  const handleButtonClick = () => {
    setGithubUser(userInput);
    setUserInput("");
  };

  return (
    <StyledUserInput darkMode={darkMode} noResult={noResult}>
      <input
        type="text"
        placeholder="Search Github username..."
        onChange={handleUserInput}
        onKeyPress={handleKeyPress}
        value={userInput}
      />
      <button onClick={handleButtonClick}>Search</button>
      <p>No results</p>
    </StyledUserInput>
  );
}

export default React.memo(UserInput);
