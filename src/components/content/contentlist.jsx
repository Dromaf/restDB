import React from "react";
import s from "./contentList.module.css";
const ContentList = (props) => {
    return (
        <div className={s.main_content}>
            <div className={s.main_content_item}>
                <div className={s.img} style={{backgroundImage: `url(${props.restaurDb.image})`}} aria-label={props.restaurDb.title} role="img" />
                <div className={s.item_name}>{props.restaurDb.title} </div>
            </div>
        </div>
    );
};

export default ContentList;