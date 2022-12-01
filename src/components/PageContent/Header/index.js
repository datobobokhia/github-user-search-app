import { StyledHeader } from "../../styles/Header.styled";

export default function Header({ darkMode, setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <StyledHeader darkMode={darkMode}>
      <h1>devfinder</h1>
      <div>
        {darkMode ? <h4>DARK</h4> : <h4>LIGHT</h4>}
        <img
          src={
            darkMode
              ? "/assets/photo/icon-sun.svg"
              : "/assets/photo/icon-moon.svg"
          }
          alt="moon"
          onClick={handleDarkMode}
        />
      </div>
    </StyledHeader>
  );
}
