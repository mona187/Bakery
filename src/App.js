import "./App.css";
import Home from "./Components/Home";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
// use states
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#ffc8dd",
  },
  dark: {
    mainColor: "#ffc8dd",
    backgroundColor: "#293241",
  },
};

function App() {
  const [currentTheme, setTheme] = useState(theme.light);

  const toggleTheme = () => {
    currentTheme === theme.dark ? setTheme(theme.light) : setTheme(theme.dark);
  };
  const themeButtonText =
    currentTheme === theme.dark ? "Light Mode" : "Dark Mode";
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <div>
          <ThemeButton onClick={toggleTheme}>{themeButtonText}</ThemeButton>
          <Home />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
