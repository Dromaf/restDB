import React, { Component } from "react";
import s from "./search.module.css";

export default class Search extends Component {

  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <form>
        <input type="text"
          value={this.state.term}
          onChange={this.onSearchChange} />
        <button className={s.search} type="submit"><i className="fas fa-search"></i></button>
      </form>
    );
  }
};
