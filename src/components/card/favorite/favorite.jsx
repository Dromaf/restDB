import React from "react";
import s from "./favorite.module.css";
import ContentList from "../../content/contentlist";
import { Link } from 'react-router-dom';
import GoBack from "../../back/back";
import Filter from "../../filter/filter";

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favorite: JSON.parse(localStorage.getItem('favorite')) || [],
            showPopup: false,
            options: [],
      snackbaropen:false, 
      snackbarmasg:''
        }
    }
    snackbarClose = (event)=>{
        this.setState({snackbaropen:false})
      }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onOptionChange(options) {
        this.setState({ options });
    };

    deleteFavorite(e) {
        const { favorite } = this.state
        for (let i = 0; i < favorite.length; i++) {
            let obj = favorite[i];

            if (e.target.id.indexOf(obj.id) !== -1) {
                favorite.splice(i, 1);
            }
        }
        localStorage.setItem('favorite', JSON.stringify(favorite));
        this.setState({ favorite: favorite,snackbaropen:true, snackbarmasg: 'Заведение удалено из избранного' })

    }

    render() {
        return (
            <div className={s.bgfon} >
                {/* <Header /> */}
                <header className={s.header}>
                    <div className={s.header_arrow}><GoBack /></div>
                    <div className={s.star}>Избранное</div>
                    <div ></div>
                </header>
                {this.state.showPopup ?
                    <Filter {...this.props} onOptionChange={this.onOptionChange.bind(this)}
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                } {
                    this.state.favorite.length > 0 ?
                        this.state.favorite && this.state.favorite.map((item) => {
                            return (

                                <div key={item.id} className={s.favorCont}>
                                    <Link to={`/card/${item.id}`}>
                                        <ContentList restaurDb={item} />
                                    </Link>
                                    <button
                                        id={item.id}
                                        onClick={this.deleteFavorite.bind(this)}
                                        className={s.delfavorButtorn}>
                                    </button>
                                </div>


                            )

                        })
                        : <p style={{ textAlign: 'center' }}>Ваш список избранного пуст!</p>
                }
 <Snackbar
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        open = {this.state.snackbaropen}
        autoHideDuration = {1000}
        onClose = {this.snackbarClose}
        message = {<span id="massage_id">{this.state.snackbarmasg}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.snackbarClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
        />
            </div>
        );
    }
}
export default Favorite;
