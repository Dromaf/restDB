import React, { Component } from 'react';
import s from "./filter.module.css";

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        console.log(this.props)
        return (
            <div className={s.main}>
                Filter
            </div>
        );
    }
}