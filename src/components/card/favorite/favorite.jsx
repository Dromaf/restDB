import React from "react";
import s from "./favorite.module.css";
import ContentList from "../../content/contentlist";
import { Link } from 'react-router-dom';
import GoBack from "../../back/back";
import Filter from "../../filter/filter";
import filter from "../../content/img/filter.svg";
class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favorite: JSON.parse(localStorage.getItem('favorite')) || [],
            showPopup: false,
            options: [],
        }
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onOptionChange(options) {
        this.setState({ options });
    };

    render() {
        console.log(this.state.favorite)
        return (
            <div className={s.bgfon} >
                {/* <Header /> */}
                <header className={s.header}>
                    <div className={s.header_arrow}><GoBack /></div>
                    <div className={s.star}>Избранное</div>
                    <div className={s.header_menu} onClick={this.togglePopup.bind(this)}><img src={filter} alt={filter} /></div>
                </header>
                {this.state.showPopup ?
                    <Filter {...this.props} onOptionChange={this.onOptionChange.bind(this)}
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
                {this.state.favorite && this.state.favorite.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`/card/${item.id}`}>
                                <ContentList restaurDb={item} />
                            </Link>

                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Favorite;
