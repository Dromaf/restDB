import React from "react";
import s from "./card.module.css";
import Header from "../header/header";
const Card = (props) => {
  return (
    <div className={s.bgfon}>
      <div className={s.main_content}>
        <div className={s.main_content_item}>
          <div className={s.item_name}>1</div>
          <div className={s.item_name}>1</div>
          <div className={s.item_name}>1</div>
        </div>


      </div>
    </div>
  );
};

export default Card;
