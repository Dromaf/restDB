import React, { Component } from 'react';
import s from "./qr.module.css";
import { Link } from "react-router-dom";
import GoBack from "../../back/back";
import qr from "../img/qr-code.gif";

export default class Qr extends Component {


  render() {
    return (
      <div className={s.location_main}>
         <header className={s.header}>
          <div className={s.header_arrow}> <GoBack /> </div>
          <div className={s.star}> <Link to={`/favorite`} ></Link></div>
        </header>
        <div className={s.qr}>
            <img  src={qr} alt={qr} />
        </div>
        <div className={s.descr}>
           <p><span style={{color:"#ffe4db"}}>Povered by:</span>  Alina Yuskanli, Dima Padalka</p>
           <p>© 2019</p>

        </div>

      </div>
    )
  }
}
