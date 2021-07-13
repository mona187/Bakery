import "./App.css";

import Home from "./Components/Home";
// Route
import { Route, Switch } from "react-router";
import NavBar from "./Components/NavBar";
// styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
// use states
import { useState } from "react";
import CakeList from "./Components/CakeList";
import CakeDetail from "./Components/CakeDetail";
import { observer } from "mobx-react";
const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#ffc8dd",
    DeleteColor: "red",
    color: "pink",
  },
  dark: {
    mainColor: "#ffc8dd",
    backgroundColor: "#293241",
    DeleteColor: "red",
    color: "pink",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <div>
          <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

          <Switch>
            <Route path="/cakes/:cakeSlug">
              <CakeDetail />
            </Route>

            <Route path="/cakes">
              <CakeList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}
export default observer(App);
