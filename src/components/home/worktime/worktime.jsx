import React, { Component } from 'react';
import s from "./worktime.module.css";
import { Link } from "react-router-dom";

export default class Worktime extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     options: [],
  //   }
  // }

  renderType() {
    console.log(this.props.state.restaurDb[0].closeTime)
    
    this.props.state.restaurDb.map((item) => {
      console.log(item.closeTime)
      return (
        <option key={item.id} value={item.closeTime}>
          {item.closeTime}
        </option>
      );
    });
  }
  render() {
    return (
      <div >
          <select value={this.props.value}  className={s.selectReg}>
            <option value="" >Время открытия:</option>
            {this.renderType()}
          </select>
          <select value={this.props.value}  className={s.selectReg}>
            <option value="" >Время закрытия:</option>
            {this.renderType()}
          </select>
       
        <Link to={`/card`}>
          <button className={s.workFilterBtn}
            type="button"
          > Filter
          </button>
        </Link>


      </div>
    )
  }
}
