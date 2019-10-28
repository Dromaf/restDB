import React from "react";
import s from "./home.module.css";
import time from "./img/time.png";
import place from "./img/place.png";
import fork from "./img/fork.png";
import Location from '../location/location';

const Home = props => {
  return (
    <div >
      <div className={s.main}>
        <div className={`${s.main_item} ${s.main_item_first}`} >
          <button className={s.main_text}>
            <img src={place} alt={place} />
            Расположение
          </button>
        </div>
        <div className={s.main_item}>
          <button className={s.main_text}>
            <img src={time} alt={time} />
            Время работы
          </button>
        </div>
        <div className={s.main_item}>
          <button className={s.main_text}>
            <img src={fork} alt={fork} />
            Тип заведения
          </button>
        </div>
      </div>
    </div>

  );
};

export default Home;
