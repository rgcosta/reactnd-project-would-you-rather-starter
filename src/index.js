import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducers from './reducers';
import middlewares from './middlewares';
import Question from './components/Question'
import Dashboard from "./components/Dashboard";

const store = createStore(reducers, middlewares);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
