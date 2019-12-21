import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Part1 from './Challenge2/Part1';
export default class Challenge2 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        return(
            <Router>
            <Switch>
              <Route path={`${this.props.match.path}/path1`} >
                <Part1 />
              </Route>
            </Switch>
          </Router>
        );
    }
}