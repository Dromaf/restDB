import React, { Component } from 'react';
import s from "./filter.module.css";
import TimeRangeSlider from 'react-time-range-slider';
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
            let checkvalue = false;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === district) {
                    checkvalue = true;
                }
            }
            return (
                <option value={district} key={index} selected={checkvalue} name={district}>{childtypeFilter[index]}</option>

            );
        });
    }
    renderCheckboxesType() {
        const status = this.props.state.restaurDb[0].type
        return Object.keys(status).map((type, index) => {
            let childtypeFilter = [];
            let checkvalue = ``;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === type) {
                    checkvalue = `checked`
                }
            }
            return (
                <div className={s.checkboxHeight} key={index}>
                    <label className="checkbox" >
                        <input
                            onChange={this.props.onOptionChange}
                            type="checkbox"
                            name={type}
                            defaultChecked={checkvalue}
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
            let checkvalue = ``;
            for (let key in status) {
                childtypeFilter.push(`${translation[key]}`);
            }
            for (let i = 0; i < this.props.options.length; i++) {
                if (this.props.options[i] === cuisine) {
                    checkvalue = `checked`
                }
            }
            return (
                <div className={s.checkboxHeight} key={index}>
                    <label className="checkbox" >
                        <input
                            onChange={this.props.onOptionChange}
                            type="checkbox"
                            name={cuisine}
                            defaultChecked={checkvalue}
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
                            <option value="" >Выберите район:</option>
                            {this.renderCheckboxesDistrict()}
                        </select>
                    </div>
                </div>
                <div className={s.time_range_position}>

                    <div className={s.time_range}>
                        <div className={s.time_title}> Время открытия: <div className={s.time_title_clock}>{this.props.timeValue.start}</div></div>
                        <div className={s.time_title}> Время закрытия: <div className={s.time_title_clock}> {this.props.timeValue.end}</div></div>
                    </div>
                    <div className={s.time_range_slider}>
                        <TimeRangeSlider
                            disabled={false}
                            format={24}
                            maxValue={"23:59"}
                            minValue={"00:00"}
                            name={"time_range"}
                            onChange={this.props.timeChangeHandler}
                            step={60}
                            value={this.props.timeValue} />
                    </div>

                </div>
                <div className={s.checkboxName}>Типы заведений
                    <div className={s.checkboxSize}>{this.renderCheckboxesType()}</div>
                </div>
                <div className={s.checkboxName}>Кухня
                    <div className={s.checkboxSize}> {this.renderCheckboxesСuisine()}</div>
                </div>


                <button onClick={this.props.closePopup} className={s.closePopupClose}>Фильтровать</button>
                <button onClick={() => { this.props.resetOptionsChange(); this.props.closePopup() }} className={s.closePopupClose}>Сбросить фильтр</button>
            </div >
        );
    }
}
