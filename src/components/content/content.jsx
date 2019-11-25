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
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
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

  dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}
  multipleDateRangeOverlaps() {
    var i, j;
    if (arguments.length % 2 !== 0)
        throw new TypeError('Arguments length must be a multiple of 2');
    for (i = 0; i < arguments.length - 2; i += 2) {
        for (j = i + 2; j < arguments.length; j += 2) {
            if (
                this.dateRangeOverlaps(
                    arguments[i], arguments[i+1],
                    arguments[j], arguments[j+1]
                )
            ) return true;
        }
    }
    return false;
}
  timeFilter(rests) {
    // let start = Date.parse(`Wed, 09 Aug 1990 ${this.props.filterTime.start}:00 GMT`);
    // let end = Date.parse(`Wed, 09 Aug 1990 ${this.props.filterTime.end}:00 GMT`);
   
    let start = Date.parse(`Wed, 09 Aug 1990 ${this.props.filterTime.start}:00 GMT`);
    let end = Date.parse(`Wed, 09 Aug 1990 ${this.props.filterTime.end}:00 GMT`);

    return rests.filter((item) => {
      let itemStart = Date.parse(`Wed, 09 Aug 1990 ${item.openTime}:00 GMT`);
      let itemEnd = Date.parse(`Wed, 10 Aug 1990 ${item.closeTime}:00 GMT`);

      console.log(this.props.filterTime)
      console.log(item.openTime, item.closeTime, this.props.filterTime.start, this.props.filterTime.end)
      return  this.dateRangeOverlaps( start, end, itemStart, itemEnd)

    })
  }

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
    return this.timeFilter(filterRests);
  }

  addFavorite(e) {
    let list = this.props.state.restaurDb;
    let local = list;
    // let indexLocal

    const { favorite } = this.state
    if (favorite.indexOf(e.target.id) === -1) {
      favorite.push(e.target.id);
      console.log(favorite);
      console.log(`значение добавлено`);
    } else {
      // indexLocal = favoriteList.indexOf(e.target.id)
      // favoriteList.splice(indexLocal, 1)
      console.log(`значение удалено`);
    }
    this.setState({ favorite: favorite })


    let favorlocal = [];
    for (let j = 0; j < favorite.length; j++) {
      const key = favorite[j];
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

    this.setState({ favorite: a3 })

    console.log(a3);
  }
  deleteFavorite(e) {
    const { favorite } = this.state

    console.log("filter")
    console.log(favorite)
    let favorNew = favorite.filter((fav) => {
      return parseInt(fav.id) !== parseInt(e.target.id);
    })

    console.log(favorNew)
    console.log("filter END")
    localStorage.setItem('favorite', JSON.stringify(favorNew));
    this.setState({ favorite: favorNew })

  }
  favoriteDeleteButton(item) {
    return (
      <button
        id={item.id}
        onClick={this.deleteFavorite.bind(this)}
        className={s.delfavorButtorn}>
      </button>
    );
  }
  favoriteAddButton(item) {
    return (
      <button
        id={item.id}
        onClick={this.addFavorite.bind(this)}
        className={s.favorButton}>
      </button>
    );

  }

  favButton(item) {
    let localFavors = JSON.parse(localStorage.getItem('favorite')) || [];
    let favorIds = localFavors.map((item) => {
      return item.id;
    });
    if (favorIds.indexOf(item.id) === -1) {
      return this.favoriteAddButton(item)
    } else {
      return this.favoriteDeleteButton(item)
    }
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
              {this.favButton(item)}

            </div>
          )
        })}
        { !this.state.showMore && visibleItems.length > 5 ?
         <button className={s.button_more} onClick={() => this.handleClick()} >Показать все</button> 
         : null }
        

      </div>
    );
  }
}
export default Content;
