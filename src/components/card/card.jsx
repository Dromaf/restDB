import React from "react";
import s from "./card.module.css";
const Card = (props) => {
  const restdb = props.item;

  return (
    <div className={s.bgfon}>
          <div className={s.main_content}>
            <div className={s.buttons_card_container}>
              <div className={s.arrow_back}>
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M7.50229 2.54472C7.82654 2.31916 8.33702 2.31916 8.66127 2.54472C8.97457 2.76267 8.97457 3.12541 8.66127 3.34284L2.78456 7.43099H22.1769C22.6289 7.43099 22.9999 7.68094 22.9999 7.99541C22.9999 8.30989 22.6289 8.56797 22.1769 8.56797H2.78456L8.66127 12.6485C8.97457 12.8741 8.97457 13.2373 8.66127 13.4547C8.33702 13.6803 7.82654 13.6803 7.50229 13.4547L0.234363 8.39879C-0.0789348 8.18084 -0.0789348 7.81811 0.234363 7.60067L7.50229 2.54472Z" fill="#FFE4DC"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="23" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>  
            <div
              className={s.call_button}
              onClick={() => {
                if ('geolocation' in navigator) {
                  navigator.geolocation.getCurrentPosition(
                    (res) => window.open(`https://www.google.com.ua/maps/dir/${res.coords.latitude},${res.coords.longitude}/${encodeURIComponent(restdb.adress)}`),
                    (rej) => console.log(rej),
                  );
                }
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip1)">
              <path d="M27.9815 23.0453C27.8925 22.3725 27.5041 21.7923 26.916 21.4537L20.0083 17.4766C19.1622 16.9894 18.0889 17.1312 17.3984 17.8217L16.0378 19.1823C15.6757 19.5445 15.1029 19.5765 14.7057 19.2568C13.633 18.3937 12.5769 17.4438 11.5667 16.4336C10.5565 15.4233 9.60662 14.3673 8.74347 13.2946C8.42375 12.8973 8.45574 12.3245 8.81791 11.9624L10.1785 10.6018C10.869 9.91138 11.0109 8.83821 10.5237 7.99199L6.54651 1.08429C6.20786 0.496122 5.62779 0.107758 4.95496 0.0187403C4.28206 -0.0704589 3.6209 0.15396 3.14098 0.633882L1.09085 2.68407C-0.340025 4.11501 -0.363005 6.73244 1.02614 10.0543C2.36189 13.2485 4.85463 16.7647 8.04506 19.9552C11.2356 23.1457 14.7518 25.6384 17.946 26.9742C19.5811 27.658 21.0455 27.9996 22.2818 27.9996C23.5571 27.9996 24.5897 27.6359 25.3162 26.9094L27.3664 24.8592C27.8462 24.3793 28.0705 23.7181 27.9815 23.0453ZM19.5557 18.2627L26.4634 22.2398C26.805 22.4365 27.0306 22.7735 27.0822 23.1642C27.1256 23.4922 27.0404 23.8151 26.8473 24.0754L17.667 18.836L18.0398 18.4632C18.4408 18.0622 19.0643 17.9798 19.5557 18.2627ZM4.83594 0.918049C5.22679 0.969754 5.56369 1.19532 5.76035 1.53694L9.73754 8.44464C10.0206 8.93611 9.93808 9.55948 9.53707 9.96042L9.19461 10.3029L3.92648 1.15299C4.14182 0.99352 4.39938 0.906922 4.66789 0.906922C4.72358 0.906922 4.77976 0.91061 4.83594 0.918049ZM24.6747 26.268C23.538 27.4047 21.213 27.3571 18.2959 26.1372C15.2081 24.846 11.7955 22.4227 8.68657 19.3138C5.5776 16.2048 3.15428 12.7921 1.86304 9.70437C0.643101 6.78729 0.595508 4.46231 1.7323 3.32546L3.25425 1.80345L8.5303 10.9672L8.17647 11.321C7.48616 12.0114 7.42605 13.1043 8.03671 13.8634C8.92018 14.9613 9.89205 16.0419 10.9252 17.075C11.9585 18.1082 13.039 19.0801 14.1369 19.9635C14.8959 20.5742 15.9887 20.5142 16.6792 19.8237L17.002 19.5009L26.1951 24.7476L24.6747 26.268Z" fill="#FFE4DC"/>
              </g>
              <defs>
              <clipPath id="clip1">
              <rect width="28" height="28" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
          </div>
        <img src={restdb.image} alt={restdb.image} />
        <h2>{restdb.title}</h2>
        <div className={s.description}>{restdb.description}</div>
        <div className={s.card_info_container}>
          <div className={s.type}>Тип:</div>
          <div className={s.work_time}></div>
          <div className={s.adress}>{restdb.adress}</div>
          <div className={s.links}>{restdb.links}</div>
        </div>
        <div className={s.map_nav}>{restdb.map}</div>
      </div>
    </div>

  );
};

export default Card;
