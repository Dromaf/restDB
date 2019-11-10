import React from "react";
import s from "./contentList.module.css";
const ContentList = (props) => {
    return (
        <div className={s.main_content}>
            <div className={s.main_content_item}>
                <img src={props.restaurDb.image} alt={props.restaurDb.image} />
                <div className={s.item_name}>{props.restaurDb.title} </div>
            </div>
        </div>
    );
};

export default ContentList;