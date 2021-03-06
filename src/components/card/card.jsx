import React from "react";
import s from "./card.module.css";
import PopUpTel from "./popUpTel/popUpTel";
import GoBack from "../back/back";
import { Link } from "react-router-dom";
import star from "../home/worktime/img/star.svg";

const translation = {
  pub: "Паб",
  restaurant: " Ресторан",
  cafe: " Кафе",
  teahouse: " Чайная",
  coffeehouse: " Кофейня",
  bar: " Бар",
  hookah: " Кальянная",
  steakhouse: " Cтейк-хаус",
  ukrainian: " Украинская",
  europinian: " Европейская",
  сaucasian: " Кавказская",
  itlian: " Итальянская",
  grill: " Гриль",
  seafood: " Морепродукты",
  japaneese: " Японская",
  desserts: " Дессерты",
  asian: " Азиатская",
  chineese: " Китайская",
  mexican: " Мексиканская",
  american: " Американская",
  kidsRoom: " Детская комната ", //Детские комнаты
  reservation: " Бронь столов",  // Бронь столов
  DressingRoom: " Гардеробная",//гардероб
  cardPayment: " Оплата картой", //Оплата картой
  parking: " Парковка", //Парковка
  delivery: " Доставка", //доставка
  wifi: " Wi-Fi",
  takeaway: " Вынос еды с собой", //еда или напитки на вынос
  plaseForSmoking: " Место для курения",
  iqosFriendly: " Iqos friendly",
}
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telephoneBlockStatus: false,
      mapRouteUrl: null,
    }
    const restdb = this.props.state.restaurDb[`${this.props.itemId - 1}`];
    if ('geolocation' in navigator) {
      console.log("here");
      navigator.geolocation.getCurrentPosition(
        (res) => {
          this.setState({mapRouteUrl: `https://www.google.com.ua/maps/dir/${res.coords.latitude},${res.coords.longitude}/${encodeURIComponent(restdb.adress)}`})
        },
        (rej) => console.log(rej),
      );
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
      if (!obj.hasOwnProperty(key)) continue;
      let value = obj[key];
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
    const adressPlace = `https://www.google.com/maps/place/${restdb.adress}`
    let str = ",";
    

    return (

      <div className={s.bgfon}>
         <header className={s.header}>
          <div className={s.header_arrow}> <GoBack /> </div>
          <div className={s.star}> <Link to={`/favorite`} ><img src={star} alt={star} /></Link></div>
        </header>
        <div className={s.main_content}>
          
          {this.state.telephoneBlockStatus && <PopUpTel telephone={restdb.telephone} />}
          <img src={restdb.image} alt={restdb.image}/>
          <h1>{restdb.title}</h1>
          <h2 className={s.type}>
            {type + ''}
          </h2>
          <div className={s.work_time}>
            Время работы:
              <br />
              <div className={s.insideInfoStyle}>
                {'с ' + restdb.openTime + ' '}{'до ' + restdb.closeTime}
              </div>
          </div>
          <br />
          <div className={s.adress}>Адрес: 
          <div className={s.insideInfoStyle}>
          {restdb.adress}</div>
          </div>
          <br />
          <div className={s.telephone}>Телефон:
            <br />
              <a href={"tel:" + restdb.links}>
                <br />
              {restdb.telephone + `${str.substring(0, str.length - 1)}`}
              </a>
            </div>

          <br />
          <div className={s.cuisine}>
            Кухня:
            <br />
            <div className={s.insideInfoStyle}>
            {cuisine + ' '}
            </div>
          </div>
          <br />
          <div className={s.links}>
            Соц. сети:
            <div className={s.insideInfoStyle}>
              <a href={restdb.links}>
                {restdb.links}
              </a>
            </div>
            </div>
          <br />
          <div className={s.advantages}>
            Дополнительные услуги:
              <br />
              <div className={s.insideInfoStyle}>
            {advantages + ' '}
            </div>
            <br />
          </div>
          <a className={s.make_route_button} href={this.state.mapRouteUrl} rel="noopener noreferrer" target="_blank">Построить маршрут</a>
          <a className={s.make_route_button} href={adressPlace} rel="noopener noreferrer" target="_blank">Показать на карте</a>
       
        </div>
      </div>

    );
  }
};

export default Card;