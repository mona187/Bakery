import { Route, Switch } from "react-router";
import cakeStore from "../stores/cookieStore";

import CakeList from "./CookieList";
import CakeDetail from "./CookieDetail";
import Home from "./Home";

import BakeryList from "./BakeryList";
import BakeryDetail from "./BakeryDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cakes/:cakeSlug">
        <CakeDetail />
      </Route>
      <Route path="/cakes">
        <CakeList cakes={cakeStore.cakes} />
      </Route>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
