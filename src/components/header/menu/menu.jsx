import React from 'react';
import s from './menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={s.menu_item} >
          
         <NavLink exact to="/" activeClassName={s.activeLink}>Главная</NavLink>
         <NavLink to="/info" activeClassName={s.activeLink} >Контент</NavLink>
        </div>
    )
};

export default Menu;