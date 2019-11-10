import React from "react";
import s from "./content.module.css";
import Header from "../header/header";
import ContentList from "./contentlist";
import Search from "../search/search";
import { Link } from 'react-router-dom';
import Filter from "../filter/filter";

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
  onOptionChange(options) {
    this.setState({ options });
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

  render() {
    const visibleItems = this.search(this.getItems(), this.state.term);
    const numberOfItems = this.state.showMore ? visibleItems.length : 5;

    return (
      <div className={s.bgfon} >
        <Header />
        <Filter {...this.props} onOptionChange={this.onOptionChange.bind(this)} />
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
