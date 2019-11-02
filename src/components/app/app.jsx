import React from "react";
import Content from "../content/content";
import Card from "../card/card";
import Home from "../home/home";
import Location from "../location/location";
import "normalize.css";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div id="container">
        <Route
          exact
          path="/"
          render={() => <Home {...props} />}
        />
        <Route
          path="/loc"
          render={() => <Location />}
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
      </div>
    </BrowserRouter>
  );
};

export default App;
