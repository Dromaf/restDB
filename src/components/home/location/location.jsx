import React, { Component } from 'react';
import s from "./location.module.css";
import { Link } from "react-router-dom";
const translation = {
  Shevchenkovskiy: "Шевченковский",
  Oktyabrksiy: "Подольский",
  Kievskiy: "Киевский",
}
export default class Location extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     options: [],
  //   }
  // }

  renderType() {
    console.log(this.props)
    console.log(this.props)

    const status = this.props.state.restaurDb[0].district
    return Object.keys(status).map((type, index) => {
      let childtypeFilter = [];
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      return (
        <div key={index} >
          <input 
            onChange={this.props.onOptionChangeFork}
            type="checkbox"
            name={type}
          /> {childtypeFilter[index]}
        </div>
      );
    });
  }
  render() {
    return (
      <div >
        <div >
          {this.renderType()}
        </div>
        <Link to={`/card`}>
          <button className={s.locFilterBtn}
            type="button"
          > Filter
          </button>
        </Link>


      </div>
    )
  }
}
