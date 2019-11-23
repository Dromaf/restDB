import React, { Component } from 'react';
import s from "./worktime.module.css";
import { Link } from "react-router-dom";
import TimeRangeSlider from 'react-time-range-slider';
import GoBack from "../../back/back";
import star from "./img/star.svg";
export default class Worktime extends Component {
  constructor(props) {
    super(props);
    
    this.featureRef = React.createRef();
    this.state = {
      
    }
  }

  

  render() {
    console.log(this.props)
    return (
      <div className={s.bgfon}>
        <header className={s.header}>
          <div className={s.header_arrow}> <GoBack /> </div>
          <div className={s.star}> <Link to={`/favorite`} ><img src={star} alt={star} /></Link></div>
        </header>
        <div className={s.main}>
          <div className={s.time_range}>
            <div className={s.time_title}> Время открытия: <div className={s.time_title_clock}>{this.props.timeValue.start}</div></div>
            <div className={s.time_title}> Время закрытия: <div className={s.time_title_clock}> {this.props.timeValue.end}</div></div>
          </div>
          <div className={s.time_range_slider}>
            <TimeRangeSlider
              disabled={false}
              format={24}
              maxValue={"23:59"}
              minValue={"00:00"}
              name={"time_range"}
              onChange={this.props.timeChangeHandler}
              step={60}
              value={this.props.timeValue} />
          </div>
        </div >
        <Link to={`/card`}>
          <button className={s.workFilterBtn}
            type="button"
          > Фильтровать
          </button>
        </Link>
      </div>
    )
  }
}
