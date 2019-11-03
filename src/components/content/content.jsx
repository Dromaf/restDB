import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import ContentList from "./contentlist";
import Search from "../search/search";
import { Link } from 'react-router-dom';
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      term: '',
    }
  }
  handleClick() {
    this.setState({ showMore: true })
  }
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  };

  onSearchChange(term) {
    this.setState({ term });
  };

  render() {
    const visibleItems = this.search(this.props.state.restaurDb, this.state.term);
    const numberOfItems = this.state.showMore ? visibleItems.length : 5

    console.log(visibleItems)
    return (
      <div className={s.bgfon} >
        <Header />
        <Search onSearchChange={this.onSearchChange.bind(this)} />
        {visibleItems.slice(0, numberOfItems).map((visibleItems) => {
          return (
            <Link to={`/card/${visibleItems.id}`} key={visibleItems.id}>
              <ContentList restaurDb={visibleItems} />
            </Link>
          )
        })}
        <button className={s.button_more} onClick={() => this.handleClick()}>Показать все</button>
      </div>
    );
  }
}
export default Content;
