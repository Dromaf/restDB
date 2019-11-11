import React from 'react';
import { withRouter } from 'react-router-dom';
import back from "./img/back.svg";

const GoBack = ({ history }) => <img src={back} onClick={() => history.goBack()} alt="Go back" />;

export default withRouter(GoBack);