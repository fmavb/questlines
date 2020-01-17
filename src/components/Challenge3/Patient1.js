import React, {Component} from 'react';

export default class Patient1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>John Doe</h1>
                <ul>
                    <li>Age: 20</li>
                    <li>Height: 180cm</li>
                    <li>Weight: 95kg</li>
                    <li>Blood type: A+</li>
                    <li>Chronic diseases: Diabetes</li>
                </ul>
            </div>
        );
    }
}