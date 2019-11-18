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
            let proverka = false;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === district) {
                    proverka = true;
                }
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
                <option value={district} key={index} selected={proverka} name={district}>{childtypeFilter[index]}</option>

            );
        });
    }
    renderCheckboxesType() {
        const status = this.props.state.restaurDb[0].type
        return Object.keys(status).map((type, index) => {
            let childtypeFilter = [];
            let proverka = ``;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === type) {
                    proverka = `checked`
                }
            }
            return (
                <div className={s.checkboxHeight} key={index}>
                    <label className="checkbox" >
                        <input
                            onChange={this.props.onOptionChange}
                            type="checkbox"
                            name={type}
                            defaultChecked={proverka}
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
            let proverka = ``;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === cuisine) {
                    proverka = `checked`
                }
            }
            return (
                <div className={s.checkboxHeight} key={index}>
                    <label className="checkbox" >
                        <input
                            onChange={this.props.onOptionChange}
                            type="checkbox"
                            name={cuisine}
                            defaultChecked={proverka}
                        />
                        <div className="checkbox__text"> {childtypeFilter[index]}</div>
                    </label>
                </div>
            );
        });
    }




    render() {
        return (
            <div className={s.main}>
                <div className={s.checkboxName}>Районы
                     <div className={s.checkboxSize_distr}>
                        <select value={this.props.value} onChange={this.props.onOptionChangeSelect} className={s.selectReg}>
                            <option value="">Выберите район:</option>
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
