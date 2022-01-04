import React from 'react';
import './index.css';
import App from './App';

// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';


const store = createStore (rootReducer, composeWithDevTools());


ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
