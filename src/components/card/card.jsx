import React from "react";
import s from "./card.module.css";
const Card = (props) => {
  return (
    <div className={s.bgfon}>
      <div className={s.main_content}>
        <div className={s.main_content_item}>
          <div className={s.item_name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur sunt error numquam expedita enim distinctio consectetur et iusto, aut ipsam autem eaque blanditiis nam fugit officiis quod fugiat doloribus?</div>
          <div className={s.item_name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur sunt error numquam expedita enim distinctio consectetur et iusto, aut ipsam autem eaque blanditiis nam fugit officiis quod fugiat doloribus?</div>
          <div className={s.item_name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur sunt error numquam expedita enim distinctio consectetur et iusto, aut ipsam autem eaque blanditiis nam fugit officiis quod fugiat doloribus?</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
