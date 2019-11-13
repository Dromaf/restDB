import React from "react";
import Content from "../content/content";
import Card from "../card/card";
import Home from "../home/home";
import Location from "../home/location/location";
import Worktime from "../home/worktime/worktime";
import Fork from "../home/fork/fork";
import "normalize.css";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div id="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home {...props} />}
          />
          <Route
            path="/location"
            render={() => <Location />}
          />
          <Route
            path="/worktime"
            render={() => <Worktime />}
          />
          <Route
            path="/fork"
            render={() => <Fork />}
          />

          <Route
            path="/card"
            exact
            render={() => <Content {...props} />}
          />
          <Route
            path="/card/:id" render={({ match }) => {
              const { id } = match.params;
              return < Card itemId={id} {...props} />
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
