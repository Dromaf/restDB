import React, { Component } from 'react';
import Content from "../content/content";
import Card from "../card/card";
import Home from "../home/home";
import Location from "../home/location/location";
import Worktime from "../home/worktime/worktime";
import Fork from "../home/fork/fork";
import "normalize.css";
import "./app.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorite from "../card/favorite/favorite";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      filterTime: {
        start: "00:00",
        end: "23:59"
      }
    }
  }
  onOptionChange = (e) => {
    const { options } = this.state;
    let index
    if (e.target.checked) {
      options.push(e.target.name)
    }
    else {
      index = options.indexOf(e.target.name)
      options.splice(index, 1)
    }
    this.setState({
      ...this.state,
      options: options,
     })
    //this.props.onOptionChange(options);
    console.log(options)
  }
  onOptionChangeFork = (e) => {
    const { options } = this.state;
    let index
    if (e.target.checked) {
      options.push(e.target.name)
    }
    else {
      index = options.indexOf(e.target.name)
      options.splice(index, 1)
    }
    this.setState({ 
      ...this.state,
      options: options, })
    //this.props.onOptionChange(options);
    console.log(options)
  }

  timeChangeHandler=(time)=>  {
    console.log(time)
    this.setState({
      ...this.state,
      filterTime: time
    });
  }

  onOptionChangeSelect = (e) => {
    let options = this.state.options
    let value1 = "Shevchenkovskiy";
    let value2 = "Kievskiy";
    let value3 = "Oktyabrksiy";
    console.log(e.target.value)
    if (e.target.value === "Shevchenkovskiy") {
      options = options.filter(item => item !== value2)
      options = options.filter(item => item !== value3)
      options.push(e.target.value)
    } else if (e.target.value === "Kievskiy") {
      options = options.filter(item => item !== value1)
      options = options.filter(item => item !== value3)
      options.push(e.target.value)
    } else if (e.target.value === "Oktyabrksiy") {
      options = options.filter(item => item !== value2)
      options = options.filter(item => item !== value1)
      options.push(e.target.value)
    } else {
      options = options.filter(item => item !== value3)
      options = options.filter(item => item !== value2)
      options = options.filter(item => item !== value1)
    }
    this.setState({ options: options })
    console.log(options)
  }
  render() {
    const { props } = this;
    console.log(props)
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
              render={() => <Location {...props} options={this.state.options} onOptionChangeFork={this.onOptionChangeFork} />}
            />
            <Route
              path="/favorite"
              render={() => <Favorite  {...props} />}
            />
            <Route
              path="/worktime"
              render={() => <Worktime
              timeValue={this.state.filterTime}
              options={this.state.options} 
              timeChangeHandler={this.timeChangeHandler}
              />
                        
            }
            />
            <Route
              path="/fork"
              render={() => <Fork {...props} options={this.state.options} onOptionChangeFork={this.onOptionChangeFork} />}
            />

            <Route
              path="/card"
              exact
              render={() => <Content {...props}
                options={this.state.options}
                filterTime={this.state.filterTime}
                onOptionChangeSelect={this.onOptionChangeSelect}
                onOptionChange={this.onOptionChange} />}
            />
            <Route
              path="/card/:id" render={({ match }) => {
                const { id } = match.params;
                return < Card itemId={id} {...props} />
              }}
            />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
};
