import React from "react";
import s from "./fork.module.css";

const Fork = props => {
  return (
    <div >
      <div className={s.main}>
        <div className={s.main_item}>
          <div className={s.main_text}>
           Fork
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fork;
