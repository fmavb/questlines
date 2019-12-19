import React, {Component} from 'react';
import './Challenge2.css';

export default class Challenge2 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page">
                <div className="element" id="password">
                    <p>Password</p>
                </div>
                <div className="element" id="salt">
                    <select>
                        <option defaultValue>Nothing</option>
                        <option>Username</option>
                        <option>Unique per password salt</option>
                    </select>
                </div>

                <div className="element" id="combined">
                    <p>Password combined with above dropdown</p>
                </div>
                <div className="element" id="algorithm">                    
                    <select>
                        <option>Symmetric Encryption (DES)</option>
                        <option>Symmetric Encryption (AES)</option>
                        <option>Asymmetric Encryption (RSA)</option>
                        <option>Hash Function (MD5)</option>
                        <option>Hash Function (SHA-2)</option>
                        <option>Hash Function (bcrypt)</option>
                    </select>
                </div>
                <div className="element" id="result">
                    <p>Result</p>
                </div>

                <div className="validate">
                    <button>Close</button>
                    <button>Validate</button>
                </div>
                <svg width="300" height="100">
                    <defs>
                        <marker markerWidth="13" markerHeight="13" id="arrow" orient="auto" refX="2" refY="6">
                            <path d="M2,1 L2,10 L10,6 L2,2"/>
                        </marker>
                    </defs>
                    <path id="path1" d="M30,150 L100,50"/>
                </svg>
            </div>
        );
    }
}