import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import ContentList from "./contentlist";
import { Link } from 'react-router-dom';
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
      <div className={s.bgfon} >
        <Header />
        {list.slice(0, numberOfItems).map((restaurDb) => {
          return (
            <Link to={`/card/${restaurDb.id}`} key={restaurDb.id}>
              <ContentList restaurDb={restaurDb} />
            </Link>
          )
        })}
        <button className={s.button_more} onClick={() => this.handleClick()}>Показать больше</button>
      </div>
    );
  }
}
export default Content;
