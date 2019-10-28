import React from "react";
/*import Menu from "./menu/menu";*/
import filter from "./img/filter.svg";
import back from "./img/back.svg";

import s from "./header.module.css";
import Search from "../search/search";
const Header = () => {
  return (
    <header className={s.header}>
      <div><img src={back} alt={back}/></div>
      <div><img src={filter} alt={filter}/></div>
      <Search/>
     
    </header>

  );
};

export default Header;
