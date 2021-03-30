import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Component/Homepage';
import Restanrant from './Component/Restanrant';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Service from './Component/Service';
ReactDOM.render((
  <Router>
  <Route path="/homepage" component={Homepage} />
  <Route path="/restaurant" component={Restanrant} />
  <Route path="/service" component={Service} />
</Router>), 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
