import React from "react";
import s from "./home.module.css";
import time from "./img/time.png";
import place from "./img/place.png";
import fork from "./img/fork.png";
import { Link } from 'react-router-dom';
import Content from "../content/content";
import { BrowserRouter, Route } from "react-router-dom";

const Home = props => {
  console.log(props)
  return (
    <div >
      <div className={s.main}>
        <div className={`${s.main_item} ${s.main_item_first}`} >
        <Link to={`/worktime`}>
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
              <img src={fork} alt={fork} />
              Список заведений
          </button>
          </Link>
        </div>
      </div>
      <BrowserRouter>

        <Route
          path="/info"
          render={() => <Content {...props} />}
        />
      </BrowserRouter>
    </div>

  );
};

export default Home;
