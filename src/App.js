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
import CakeList from "./Components/BakeryList";
import CakeDetail from "./Components/CakeDetail";

const theme = {
  light: {
    mainColor: "#293241",
    backgroundColor: "#ffc8dd",
    DeleteColor: "red",
  },
  dark: {
    mainColor: "#ffc8dd",
    backgroundColor: "#293241",
    DeleteColor: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  // const [cake, setCake] = useState(null);
  // const [_cakes, setCakes] = useState(cakes);

  // const cakeDelete = (cakeId) => {
  // const updatedCakes = _cakes.filter((cake) => cake.id !== cakeId);
  // setCakes(updatedCakes);}

  // const setView = () => {
  // return cake ? (
  // <CakeDetail cake={cake} setCake={setCake} cakeDelete={cakeDelete} />
  // ) : (
  // <CakeList setCake={setCake} cakes={_cakes} cakeDelete={cakeDelete} />
  // );
  // };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  // const themeButtonText =
  // currentTheme === theme.dark ? "Light Mode" : "Dark Mode";
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <div>
          <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

          {/* <NavCakes to="/cakes">Cakes</NavCakes> */}
          <Switch>
            <Route path="/cakes/:cakeSlug">
              <CakeDetail />
            </Route>

            <Route path="/cakes">
              <CakeList
              // setCake={setCake}
              // cakes={_cakes}
              // cakeDelete={cakeDelete}
              />
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
export default App;
