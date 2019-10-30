import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import valber from "./img/valber.png";
const Content = (props) => {
  console.log(props)
  return (
    <div className={s.bgfon}>
      <Header />
      <div className={s.main_content}>
        <div className={s.main_content_item}>
          <img src={valber} alt={valber} />
          <div className={s.item_name}>1</div>
        </div>
        <div className={s.main_content_item}>
          <img src={valber} alt={valber} />
          <div className={s.item_name}>1</div>
        </div>
        <div className={s.main_content_item}>
          <img src={valber} alt={valber} />
          <div className={s.item_name}>1</div>
        </div>
        <div className={s.main_content_item}>
          <img src={valber} alt={valber} />
          <div className={s.item_name}>1</div>
        </div>

      </div>
    </div>
  );
};

export default Content;
