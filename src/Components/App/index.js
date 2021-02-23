//importing page components
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";

//creating routes for site
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />

    </Switch>
  </main>
);

export default App;
