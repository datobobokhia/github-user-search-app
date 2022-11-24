import { StyledUserInput } from "../../styles/UserInput.styled";

export default function UserInput() {
  return (
    <StyledUserInput>
      <input type={"text"} placeholder={"Search Github username..."} />
      <button>Search</button>
    </StyledUserInput>
  );
}
