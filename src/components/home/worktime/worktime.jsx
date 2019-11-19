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

  render() {
    return (
      <div >
        <select value={this.props.value} className={s.selectReg}>
          <option value="" >Время открытия:</option>
          {
            this.props.state.restaurDb.map((item) => {
              console.log(item.openTime)
              return (
                <option key={item.id} value={item.openTime} name={item.openTime}>
                  {item.openTime}
                </option>
              );
            })
          };
        </select>
        <select value={this.props.value} className={s.selectReg}>
          <option value="" >Время закрытия:</option>
          {
            this.props.state.restaurDb.map((item) => {
              console.log(item.closeTime)
              return (
                <option key={item.id} value={item.closeTime} name={item.closeTime}>
                  {item.closeTime}
                </option>
              );
            })
          };
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
