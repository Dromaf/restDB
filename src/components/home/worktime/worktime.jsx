import React from "react";
import s from "./worktime.module.css";

const Worktime = props => {
  return (
    <div >
      <div className={s.main}>
        <div className={s.main_item}>
          <div className={s.main_text}>
            Worktime
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worktime;
