import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import ContentList from "./contentlist";
import Search from "../search/search";
import { Link } from 'react-router-dom';
import Filter from "../filter/filter";

const translation = {
  Shevchenkovskiy: "Шевченковский",
  Oktyabrksiy: "Подольский",
  Kievskiy: "Киевский",
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
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      term: '',
      options: [],
    }
  }
  handleClick() {
    this.setState({ showMore: true })
  }

  onSearchChange(term) {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  };

  getItems() {
    let list = this.props.state.restaurDb;
    let restParams = [`district`, `type`, `cuisine`, `advantages`];
    let filterRests = list;

    for (let i = 0; i < this.state.options.length; i++) {
      const key = this.state.options[i];
      for (let j = 0; j < restParams.length; j++) {
        const restParam = restParams[j];
        if (!list[0][restParam].hasOwnProperty(key)) {
          continue;
        }
        filterRests = filterRests.filter(item => item[restParam][key] === true);
      }
    }
    console.log(filterRests);
    return filterRests;
  }

  renderCheckboxesDistrict() {
    const status = this.props.state.restaurDb[0].district
    return Object.keys(status).map((district, index) => {
      let childtypeFilter = [];
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={district}
            />
            <div className="checkbox__text"> {childtypeFilter[index]}</div>
          </label>
        </div>
      );
    });
  }
  renderCheckboxesType() {
    const status = this.props.state.restaurDb[0].type
    return Object.keys(status).map((type, index) => {
      let childtypeFilter = [];
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={type}
            />
            <div className="checkbox__text"> {childtypeFilter[index]}</div>
          </label>
        </div>
      );
    });
  }

  renderCheckboxesСuisine() {
    const status = this.props.state.restaurDb[0].cuisine
    return Object.keys(status).map((cuisine, index) => {
      let childtypeFilter = [];
      for (let key in status) {
        childtypeFilter.push(`${translation[key]}`);
      }
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={cuisine}
            />
            <div className="checkbox__text"> {childtypeFilter[index]}</div>
          </label>
        </div>
      );
    });
  }

  onChange(e) {
    const options = this.state.options
    let index
    if (e.target.checked) {
      options.push(e.target.name)
    } else {
      index = options.indexOf(e.target.name)
      options.splice(index, 1)
    }
    this.setState({ options: options })
  }

  render() {
    const visibleItems = this.search(this.getItems(), this.state.term);
    const numberOfItems = this.state.showMore ? visibleItems.length : 5;
    return (
      <div className={s.bgfon} >
        <Header />
        <Filter />
        <div className={s.checkboxName}>Районы
          <div className={s.checkboxSize_distr}> {this.renderCheckboxesDistrict()}</div>
        </div>
        <div className={s.checkboxName}>Типы заведений
          <div className={s.checkboxSize}>{this.renderCheckboxesType()}</div>
        </div>
        <div className={s.checkboxName}>Кухня
          <div className={s.checkboxSize}> {this.renderCheckboxesСuisine()}</div>
        </div>

        <Search onSearchChange={this.onSearchChange.bind(this)} />
        {visibleItems.slice(0, numberOfItems).map((item) => {
          return (
            <Link to={`/card/${item.id}`} key={item.id}>
              <ContentList restaurDb={item} />
            </Link>
          )
        })}
        <button className={s.button_more} onClick={() => this.handleClick()}>Показать все</button>
      </div>
    );
  }
}
export default Content;
