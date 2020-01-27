import React, {Component} from 'react';
import Image from './email.png';
import "./Email.css";

export default class Email extends Component{
    
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.history.push("/challenge1/decryptor");
    }

    render(){
        return (
            <div>
                <div id="image">
                    <img src={Image} alt="Email" width="1718" height="574"></img>
                </div>
                <button onClick={this.onClick}>Go to decryptor</button>
            </div>
        );
    }
}