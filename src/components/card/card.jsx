import React from "react";
import s from "./card.module.css";
const Card = (props) => {
  console.log()
  const restdb = props.state.restaurDb[`${props.itemId - 1}`]
  return (
    <div className={s.bgfon}>
      <div className={s.main_content}>
        <h2>{restdb.title}</h2>
        <img src={restdb.image} alt={restdb.image} />
        <div className={s.item_name}>{restdb.description}</div>
        <hr />
        <div className={s.item_name}>{restdb.adress}</div>
        <hr />
        <div className={s.item_name}>{restdb.links}</div>
        <hr />
        <div className={s.item_name}>{restdb.map}</div>
      </div>
    </div>

  );
};

export default Card;
