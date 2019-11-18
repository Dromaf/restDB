import React from "react";
import s from "./content.module.css";
// import Header from "../header/header";
import ContentList from "./contentlist";
import Search from "../search/search";
import { Link } from 'react-router-dom';
import Filter from "../filter/filter";
import filter from "./img/filter.svg";
import star from "./img/star.svg";
import GoBack from "../back/back";

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
      term: '',
      favoriteList: [],
      showPopup: false
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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

    for (let i = 0; i < this.props.options.length; i++) {
      const key = this.props.options[i];
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

  addFavorite(e) {
    let list = this.props.state.restaurDb;
    let local = list;
    // let indexLocal
    const { favoriteList } = this.state
    if (favoriteList.indexOf(e.target.id) === -1) {
      favoriteList.push(e.target.id);
      console.log(favoriteList);
      console.log(`значение добавлено`);
    } else {
      // indexLocal = favoriteList.indexOf(e.target.id)
      // favoriteList.splice(indexLocal, 1)
      console.log(`значение удалено`);
    }
    this.setState({ favoriteList: favoriteList })


    let favorlocal = [];
    for (let j = 0; j < favoriteList.length; j++) {
      const key = favoriteList[j];
      for (let i = 0; i < local.length; i++) {
        if (local[i].id === +key) {
          favorlocal.push(local[i]);
        }
      }
    }
    console.log(favorlocal);
    let newLocal = JSON.parse(localStorage.getItem('favorite')) || []
    let hash = new Map();
    newLocal.concat(favorlocal).forEach(function (obj) {
      hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj))
    });
    localStorage.setItem('favorite', JSON.stringify(favorlocal));
    let a3 = Array.from(hash.values());
    localStorage.setItem('favorite', JSON.stringify(a3));

    console.log(a3);
  }

  render() {
    console.log(this.props)
    const visibleItems = this.search(this.getItems(), this.state.term);
    const numberOfItems = this.state.showMore ? visibleItems.length : 5;

    return (
      <div className={s.bgfon} >
        {/* <Header /> */}
        <header className={s.header}>
          <div className={s.header_arrow}><GoBack /></div>
          <div className={s.star}> <Link to={`/favorite`} ><img src={star} alt={star} /></Link></div>
          <div className={s.header_menu} onClick={this.togglePopup.bind(this)}><img src={filter} alt={filter} /></div>
        </header>

        {this.state.showPopup ?
          <Filter {...this.props}
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        <Search onSearchChange={this.onSearchChange.bind(this)} />
        {visibleItems.slice(0, numberOfItems).map((item) => {
          return (
            <div key={item.id} className={s.favorCont}>
              <Link to={`/card/${item.id}`}>
                <ContentList restaurDb={item} />
              </Link>
              <button
                id={item.id}
                onClick={this.addFavorite.bind(this)}
                className={s.favorButton}>
              </button>
            </div>
          )
        })}
        <button className={s.button_more} onClick={() => this.handleClick()}>Показать все</button>

      </div>
    );
  }
}
export default Content;
