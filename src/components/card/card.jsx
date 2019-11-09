import React from "react";
import s from "./card.module.css";
import PopUpTel from "./popUpTel/popUpTel";

const translation = { 
  pub: "Паб",
  restaurant: "Ресторан",
  cafe: "Кафе",
  teahouse: "Чайная",
  coffeehouse: "Кофейня",
  bar: "Бар",
  hookah: "Кальянная",
  steakhouse: "Гриль",
  ukrainian: "Украинская", 
  europinian: "Европейская",
  сaucasian: "Кавказская",
  itlian: "Итальянская",
  grill: "Гриль",
  seafood: "Морепродукты",
  japaneese: "Японская",
  desserts: "Дессерты",
  asian: "Азиатская",
  chineese: "Китайская",
  mexican: "Мексиканская",
  american: "Американская",
  kidsRoom: "Детская комната ", //Детские комнаты
  reservation: "Бронь столов",  // Бронь столов
  DressingRoom: "Гардеробная",//гардероб
  cardPayment: "Оплата картой", //Оплата картой
  parking: "Парковка", //Парковка
  delivery: "Доставка", //доставка
  wifi: "Wi-Fi",
  takeaway:  "Вынос еды с собой", //еда или напитки на вынос
  plaseForSmoking: "Место для курения",
  iqosFriendly: "Iqos friendly",
}
class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      telephoneBlockStatus: false,
    }
  }
  newTelephoneStatus = () => {
    this.setState({
      telephoneBlockStatus: !this.state.telephoneBlockStatus,
    })
  }

  typeFilter = (obj) => {
    let childtypeFilter = [];
    for (let key in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(key)) continue;

      let value = obj[key];
      console.log(value, key)
      if (value) {
        childtypeFilter.push(`${translation[key]}`);
      }

    }
    return childtypeFilter;
  }
  cuisineFilter = (obj) => {
    let childcuisineFilter = [];
    for (let key in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(key)) continue;

      let value = obj[key];
      console.log(value, key)
      if (value) {
        childcuisineFilter.push(`${translation[key]}`);
      }

    }
    return childcuisineFilter;
  }

  advFilter = (obj) => {
    let childadvFilter = [];
    for (let key in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(key)) continue;

      let value = obj[key];
      console.log(value, key)
      if (value) {
        childadvFilter.push(`${translation[key]}`);
      }

    }
    return childadvFilter;
  }

  render() {
    const restdb = this.props.state.restaurDb[`${this.props.itemId - 1}`];
    const type = this.typeFilter(restdb.type);
    const cuisine = this.cuisineFilter(restdb.cuisine);
    const advantages = this.advFilter(restdb.advantages);
    console.log(type)
    
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
              {this.state.telephoneBlockStatus && <PopUpTel telephone={restdb.telephone} />}
            </div>
          <img src={restdb.image} alt={restdb.image} />
          <h1>{restdb.title}</h1>
            <h2 className={s.type}>
            {type + ''}
            </h2>
            <div className={s.work_time}>
              Время работы:
              <br/> 
              {'с ' + restdb.openTime + ' '}{'до '+ restdb.closeTime}
            </div>
            <br/> 
            <div className={s.adress}>Адрес: {restdb.adress}</div>
            <br/>
            <div className={s.telephone}>Телефон: 
            <br/>
            {restdb.telephone + ' '}</div>
            <br/>
            <div className={s.cuisine}> 
              Кухня:
            <br/>
              {cuisine + ' '}
            </div>
            <br/>
            <div className={s.links}>{restdb.links}</div>
            <br/>
            <div className={s.advantages}>
              Дополнительные услуги:
              <br/>
              {advantages + ' '}
              <br/>
              </div>
            <button className={s.make_route_button}
              onClick={() => {
                if ('geolocation' in navigator) {
                  navigator.geolocation.getCurrentPosition(
                    (res) => window.open(`https://www.google.com.ua/maps/dir/${res.coords.latitude},${res.coords.longitude}/${encodeURIComponent(restdb.adress)}`),
                    (rej) => console.log(rej),
                  );
                }
              }}>
                Построить маршрут
              </button>
        </div>
      </div>

    );
  }
};

export default Card;

