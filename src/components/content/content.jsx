import React from "react";
import s from "./content.module.css";
import Header from "../header/header";

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
  }
  handleClick() {
    this.setState({ showMore: true })
  }
  render() {
    const list = this.props.state.restaurDb
    const numberOfItems = this.state.showMore ? list.length : 5
    return (
      <div className={s.bgfon}>
        <Header />
        {list.slice(0, numberOfItems).map((restaurDb) => {
          return (
            <div className={s.main_content}>
              <div className={s.main_content_item}>
                <img src={restaurDb.image} alt={restaurDb.image} />
                <div className={s.item_name}>{restaurDb.title}</div>
              </div>
            </div>
          )
        })}
        <button className={s.button_more} onClick={() => this.handleClick()}>Показать больше</button>
      </div>
    );
  }
}
/*
const Content = (props) => {
  console.log(props.state.restaurDb[0])
  return (
    <div className={s.bgfon}>
      <Header />
      {props.state.restaurDb.map(restaurDb => (
        <div className={s.main_content}>
          <div className={s.main_content_item}>
            <img src={restaurDb.image} alt={restaurDb.image} />
            <div className={s.item_name}>{restaurDb.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
*/

export default Content;
