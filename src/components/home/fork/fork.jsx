import React, { Component } from 'react';
import s from "./fork.module.css";
import { Link } from "react-router-dom";
import GoBack from "../../back/back";

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
      let proverka = '';
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      for (let i = 0; i < this.props.options.length; i++) {
        if (this.props.options[i] === type) {
          proverka = `checked`
        }
      }
      return (
        <div className={`${s.checkboxHeight} ${s.typeStyles}`} style={{width:"100%"}} key={index}>
        <label className="checkbox">
        <input
            onChange={this.props.onOptionChangeFork}
            type="checkbox"
            name={type}
            className={s.inputTypeStyle}
            defaultChecked={proverka}
          /> 
            <div className="checkbox__text">{childtypeFilter[index]}</div>
        </label>
    </div>

      );
      
    });
  }
  render() {
    return (
      <div className={s.Background_container}>
        <div className={s.arrow_back}><GoBack /></div>
        <div >
          {this.renderType()}
        </div>
        <Link to={`/card`}>
          <button className={s.forkFilterBtn}
            type="button"
          > Filter
          </button>
        </Link>


      </div>
    )
  }
}
