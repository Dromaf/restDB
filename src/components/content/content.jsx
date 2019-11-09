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
      options: [],
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

  getItems() {
    let list = this.props.state.restaurDb;
    let restParams = [`district`, `type`, `cuisine`, `advantages`]
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

    return filterRests;
  }


  renderCheckboxesDistrict() {
    const status = this.props.state.restaurDb[0].district
    return Object.keys(status).map((district, index) => {
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={district}
            />
            <div className="checkbox__text"> {district}</div>
          </label>
        </div>
      );
    });
  }
  renderCheckboxesType() {
    const status = this.props.state.restaurDb[0].type
    return Object.keys(status).map((type, index) => {
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={type}
            />
            <div className="checkbox__text"> {type}</div>
          </label>
        </div>
      );
    });
  }

  renderCheckboxesСuisine() {
    const status = this.props.state.restaurDb[0].cuisine
    return Object.keys(status).map((cuisine, index) => {
      return (
        <div className={s.checkboxHeight} key={index}>
          <label className="checkbox" >
            <input
              onChange={this.onChange.bind(this)}
              type="checkbox"
              name={cuisine}
            />
            <div className="checkbox__text"> {cuisine}</div>
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
    const visibleItems = this.search(this.props.state.restaurDb, this.state.term);
    const numberOfItems = this.state.showMore ? visibleItems.length : 5
    return (
      <div className={s.bgfon} >
        <Header />

        <Search onSearchChange={this.onSearchChange.bind(this)} />
        {this.getItems().slice(0, numberOfItems).map((visibleItems) => {
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
