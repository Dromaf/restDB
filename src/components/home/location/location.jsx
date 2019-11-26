import React, { Component } from 'react';
import s from "./location.module.css";
import { Link } from "react-router-dom";
import GoBack from "../../back/back";
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
      let checkedTarget = '';
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      } 
      for (let i = 0; i < this.props.options.length; i++) {
        if (this.props.options[i] === type) {
          checkedTarget = `checked`
        }
      }
      return (
        <div className={s.containerFlex}>
            <div key={index} 
            className={s.radioStyleDisctrict}>
              <input 
                id={index}
                onChange={this.props.onOptionChangeLocation}
                className={s.radioButtonStyle}
                type="radio"
                name="location"
                value={type}
                defaultChecked={checkedTarget}
              /> {childtypeFilter[index]}
            </div>
          </div>
      );
    });
  }
  render() {
    return (
      <div >
         <header className={s.header}>
          <div className={s.header_arrow}> <GoBack /> </div>
          <div className={s.star}> <Link to={`/favorite`} ></Link></div>
        </header>
        <div >
          {this.renderType()}
        </div>
        <Link to={`/card`}>
          <button className={s.locFilterBtn}
            type="button"
          > Фильтровать
          </button>
        </Link>

      </div>
    )
  }
}
