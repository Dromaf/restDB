import React from "react";
import s from "./location.module.css";

const Location = props => {
  return (
    <div className={s.bgfon}>
      <div className={s.main}>
        <div className={`${s.main_item} ${s.main_item_first}`} >
          <button className={s.main_text}> 
          Шевченковский
          </button>
        </div>
        <div className={s.main_item}>
          <button className={s.main_text}> 
          Киевский
          </button>
        </div>
        <div className={s.main_item}>
          <button className={s.main_text}>
          Подольский
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
