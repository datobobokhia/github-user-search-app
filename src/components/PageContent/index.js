import Header from "./Header";
import Main from "./Main";

export default function PageContent({ darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </>
  );
}
