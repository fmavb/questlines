import React, {Component} from 'react';

export default class Patient2 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Jane Doe</h1>
                <ul>
                    <li>Age: 35</li>
                    <li>Height: 170cm</li>
                    <li>Weight: 65kg</li>
                    <li>Blood type: B+</li>
                    <li>Chronic diseases: None</li>
                </ul>
            </div>
        );
    }
}