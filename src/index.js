// import babel from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './redux_store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Instantiating the store

const store = ConfigureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
