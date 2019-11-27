import React from "react";
import s from "./popUpTel.module.css";

const PopUpTel = (props) => {
    return (
        <div className={s.phones}>
            {props.telephone.map((item, index) => {
                return (
                    <div key={index}>{item}</div>
                )
            })}
        </div>
    )
}

export default PopUpTel;