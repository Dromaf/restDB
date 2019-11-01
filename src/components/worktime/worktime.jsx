import React from "react";
import s from "./work.module.css";

const Work = props => {
  return (
    <div >
      <div className={s.main}>
        <div className={`${s.main_item} ${s.main_item_first}`} >
          <div className={s.main_text}>
            <img src={place} alt={place} />
            Расположение
          </div>
        </div>
        <div className={s.main_item}>
          <div className={s.main_text}>
            <img src={time} alt={time} />
            Время работы
          </div>
        </div>
        <div className={s.main_item}>
          <div className={s.main_text}>
            <img src={fork} alt={fork} />
            Тип заведения
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
