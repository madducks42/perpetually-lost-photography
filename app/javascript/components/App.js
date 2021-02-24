import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home"
import CostaRica from "./Galleries/CostaRica"
import NationalParks from "./Galleries/NationalParks"
import Northeast from "./Galleries/Northeast"
import BlogContainer from "./Blogs/BlogContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/costa-rica" component={CostaRica} />
        <Route exact path="/national-parks" component={NationalParks} />
        <Route exact path="/northeast" component={Northeast} />
        <Route exact path="/blog" component={BlogContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;