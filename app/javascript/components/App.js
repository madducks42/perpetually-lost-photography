import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home"
import CostaRica from "./Galleries/CostaRica"
import NationalParks from "./Galleries/NationalParks"
import Northeast from "./Galleries/Northeast"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/costa-rica" component={CostaRica} />
        <Route exact path="/national-parks" component={NationalParks} />
        <Route exact path="/northeast" component={Northeast} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;