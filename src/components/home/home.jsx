import React from "react";
import s from "./home.module.css";
import time from "./img/time.png";
import place from "./img/place.png";
import fork from "./img/fork.png";
import list from "./img/list.png";
import qr from "./img/qr-code.gif";
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className={s.sizeContainer}>
      <div className={s.main}>
        <div className={`${s.main_item} ${s.main_item_first}`} >
          <Link to={`/location`}>
            <button className={s.main_text}>
              <img src={place} alt={place} />
              Расположение
          </button>
          </Link>
        </div>
        <div className={s.main_item}>
          <Link to={`/worktime`}>
            <button className={s.main_text}>
              <img src={time} alt={time} />
              Время работы
          </button>
          </Link>
        </div>
        <div className={s.main_item}>
          <Link to={`/fork`}>
            <button className={s.main_text}>
              <img src={fork} alt={fork} />
              Тип заведения
          </button>
          </Link>
        </div>
        <div className={s.main_item}>
          <Link to={`/card`}>
            <button className={s.main_text}>
              <img src={list} alt={list} />
              Список заведений
          </button>
          </Link>
        </div>
      </div>
      <div className={s.qr}>
      <Link to={`/qr`}>
              <img  src={qr} alt={qr} />
          </Link>
      </div>
    </div>

  );
};

export default Home;
