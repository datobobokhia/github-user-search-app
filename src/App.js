import { GlobalStyle } from "./components/styles/Global";
import PageContent from "./components/PageContent";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <PageContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}
