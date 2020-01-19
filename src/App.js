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
import Part1 from './components/Challenge2/Part1';
import Part2 from './components/Challenge2/Part2';
import Challenge3 from './components/Challenge3';
import Part3 from './components/Challenge2/Part3';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/challenge2/part1" component={Part1} />
          <Route path="/challenge2/part2" component={Part2} />
          <Route path="/challenge2/part3" component={Part3} />
          <Route path="/challenge1">
            <Challenge1 />
          </Route>
          <Route path="/challenge3" component={Challenge3} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}