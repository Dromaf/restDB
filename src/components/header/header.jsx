import React from "react";
import filter from "./img/filter.svg";
import back from "./img/back.svg";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_arrow}><img src={back} alt={back} /><GoBack/></div>
      <div className={s.header_menu}><img src={filter} alt={filter} /></div>


    </header>

  );
};

export default Header;
