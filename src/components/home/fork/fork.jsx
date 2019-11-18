import React, { Component } from 'react';
import s from "./fork.module.css";
import { Link } from "react-router-dom";
const translation = {
  pub: "Паб",
  restaurant: " Ресторан",
  cafe: " Кафе",
  teahouse: " Чайная",
  coffeehouse: " Кофейня",
  bar: " Бар",
  hookah: " Кальянная",
  steakhouse: " Cтейк-хаус",
}
export default class Fork extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     options: [],
  //   }
  // }

  renderType() {
    console.log(this.props)
    console.log(this.props)

    const status = this.props.state.restaurDb[0].type
    return Object.keys(status).map((type, index) => {
      let childtypeFilter = [];
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      return (
        <div key={index} >


          <button className={s.forkButton}
            onClick={this.props.onOptionChangeFork}
            type="button"
            name={type}
          > {childtypeFilter[index]}
          </button>

        </div>
      );
    });
  }
  render() {
    return (
      <div >
        <div className={s.mainFork}>
          {this.renderType()}
        </div>
        <Link to={`/card`}>
          <button className={s.forkButton}
            type="button"
          > Filter
          </button>
        </Link>


      </div>
    )
  }
}
