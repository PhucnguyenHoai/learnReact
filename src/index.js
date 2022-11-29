import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Tick from './learn/tickClock';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './learn/store/reducer/rootReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

const reduxStore = createStore(rootReducer);

root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

// function tick() {
//   root.render(<Tick date={new Date()} />);
// }
// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
