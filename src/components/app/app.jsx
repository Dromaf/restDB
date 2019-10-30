import React from "react";
import Header from "../header/header";
import Content from "../content/content";
import Home from "../home/home";
import Location from "../location/location";
import "normalize.css";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div id="container">

        {/*<Header />*/}
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
          path="/info"
          render={() => <Content {...props} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
