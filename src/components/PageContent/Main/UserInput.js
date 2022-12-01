import { StyledUserInput } from "../../styles/UserInput.styled";

export default function UserInput({
  userInput,
  setUserInput,
  setGithubUser,
  noResult,
  darkMode,
}) {
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

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
        type={"text"}
        placeholder={"Search Github username..."}
        onChange={handleUserInput}
        onKeyPress={handleKeyPress}
        value={userInput}
      />
      <button onClick={handleButtonClick}>Search</button>
      <p>No results</p>
    </StyledUserInput>
  );
}
