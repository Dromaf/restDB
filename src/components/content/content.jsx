import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import valber from "./img/valber.png";
const Content = (props) => {
  console.log(props.state.restaurDb[0])
  return (
    <div className={s.bgfon}>
      <Header />
      {props.state.restaurDb.map(restaurDb => (
        <div className={s.main_content}>
          <div className={s.main_content_item}>
            <img src={restaurDb.image} alt={valber} />
            <div className={s.item_name}>{restaurDb.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
