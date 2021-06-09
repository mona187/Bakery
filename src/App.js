import "./App.css";
import Home from "./Components/Home";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
const theme = {
  mainColor: "black",
  backgroundColor: "baby pink",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
