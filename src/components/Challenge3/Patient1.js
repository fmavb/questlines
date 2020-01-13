import React, {Component} from 'react';

export default class Patient1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>John Doe</h1>
                <li>
                    <ul>Age: 20</ul>
                    <ul>Height: 180cm</ul>
                    <ul>Weight: 95kg</ul>
                    <ul>Blood type: A+</ul>
                    <ul>Chronic diseases: Diabetes</ul>
                </li>
            </div>
        );
    }
}