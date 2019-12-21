import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Challenge1 from "./components/Challenge1";
import Challenge2 from './components/Challenge2';

export default class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/challenge1">
            <Challenge1 />
          </Route>
          <Route path="/challenge2" component={Challenge2}>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}