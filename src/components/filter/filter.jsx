import React, { Component } from 'react';
import s from "./filter.module.css";

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
export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        }
    }


    renderCheckboxesDistrict() {
        const status = this.props.state.restaurDb[0].district
        return Object.keys(status).map((district, index) => {
            let childtypeFilter = [];
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            return (
                // <div className={s.checkboxHeight} key={index}>
                //     <label className="checkbox" >
                //         <input
                //             onChange={this.onOptionChange.bind(this)}
                //             type="checkbox"
                //             name={district}
                //         />
                //         <div className="checkbox__text"> {childtypeFilter[index]}</div>
                //     </label>
                // </div>
                    <option value={district} key={index} name={district}>{childtypeFilter[index]}</option>
                
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
                            onChange={this.onOptionChange.bind(this)}
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
                            onChange={this.onOptionChange.bind(this)}
                            type="checkbox"
                            name={cuisine}
                        />
                        <div className="checkbox__text"> {childtypeFilter[index]}</div>
                    </label>
                </div>
            );
        });
    }
    onOptionChange(e) {
        const options = this.state.options
        console.log(e.target.name)
        let index
        if (e.target.checked) {
            options.push(e.target.name)
        }
        else {
            index = options.indexOf(e.target.name)
            options.splice(index, 1) 
        } 
        this.setState({ options: options })
        this.props.onOptionChange(options);
        console.log(options)
    }
    onOptionChangeSelect(e) {
        let options = this.state.options
        let value1 = "Shevchenkovskiy";
        let value2 = "Kievskiy";
        let value3 = "Oktyabrksiy";
        console.log(e.target.value)
        if (e.target.value === "Shevchenkovskiy") {
            options = options.filter(item => item !== value2)
            options = options.filter(item => item !== value3)
            options.push(e.target.value)
        } else if (e.target.value === "Kievskiy") {
            options = options.filter(item => item !== value1)
            options = options.filter(item => item !== value3)
            options.push(e.target.value)
        } else if (e.target.value === "Oktyabrksiy") {
            options = options.filter(item => item !== value2)
            options = options.filter(item => item !== value1)
            options.push(e.target.value)
        }
        this.setState({ options: options })
        this.props.onOptionChange(options);
        console.log(options)
    }


    render() {
        return (
            <div className={s.main}>
                <div className={s.checkboxName}>Районы
          <div className={s.checkboxSize_distr}> 
            <select value={this.props.value} onChange={this.onOptionChangeSelect.bind(this)} >
                <option value="">Выберите район</option>
                {this.renderCheckboxesDistrict()}
            </select>
          </div>
                </div>
                <div className={s.checkboxName}>Типы заведений
          <div className={s.checkboxSize}>{this.renderCheckboxesType()}</div>
                </div>
                <div className={s.checkboxName}>Кухня
          <div className={s.checkboxSize}> {this.renderCheckboxesСuisine()}</div>
                </div>
                <button onClick={this.props.closePopup} className={s.closePopupClose}>Фильтровать</button>
            </div>
        );
    }
}
