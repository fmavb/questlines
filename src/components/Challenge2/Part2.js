import React, {Component} from 'react';
import './Part2.css';

export default class Part2 extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="page">
                <div className="element" id="message">
                    <p>Message</p>
                </div>
                <div className="element" id="random">
                    <p>Cryptographic Random Number Generator</p>
                </div>
                <div className="element" id="RSAKey">
                    <p>Recipients public key</p>
                </div>
            </div>
        );
    }
}
