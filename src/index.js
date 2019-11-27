import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import state from './redux/state';
import * as serviceWorker from './serviceWorker'

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');
setTimeout(() => 
ReactDOM.render(<App  hideLoader={hideLoader}
    showLoader={showLoader}  state={state} />, document.getElementById('root'))
, 2000);

serviceWorker.register();
