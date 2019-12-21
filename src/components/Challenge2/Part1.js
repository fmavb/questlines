import React, {Component} from 'react';
import './Part1.css';

export default class Part1 extends Component{
    constructor(props){
        super(props);
        this.id = this.id.bind(this);
        this.drawArrow = this.drawArrow.bind(this);
        this.selectSalt = this.selectSalt.bind(this);
        this.selectAlgorithm = this.selectAlgorithm.bind(this);
        this.validate = this.validate.bind(this);
        this.state = {salt: "nothing", algorithm:"nothing"};
    }

    selectSalt(e){
        const value = e.target.value;
        this.setState({salt:value});
    }

    selectAlgorithm(e){
        const value = e.target.value;
        this.setState({algorithm:value});
    }

    validate(){
        if (this.state.salt === "salt" && this.state.algorithm === "bcrypt"){
            alert("This is the correct solution! You get 100 points!");
        } else if (this.state.algorithm === "des" || this.state.algorithm === "aes") {
            alert("This solution is not correct. The problem with this solution is that symmetric cryptography is reversible. \
Therefore, if an attacker steals the cipher from the database, he will be able to figure out the password by brute forcing all possible keys. You get 0 points");
        }
    }

    id(element){
        return document.getElementById(element);
    }

    drawArrow(arrow, from, to) {
        const rectFrom = this.id(from).getBoundingClientRect();
        const leftFrom = rectFrom.left + document.body.scrollLeft;
        const topFrom = rectFrom.top + document.body.scrollTop;
        const rectTo = this.id(to).getBoundingClientRect();
        const leftTo = rectTo.left + document.body.scrollLeft;
        const topTo = rectTo.top + document.body.scrollTop;
        const x1 = leftFrom + (parseFloat(getComputedStyle(this.id(from), null).width.replace("px", "")))/2;
        const y1 = topFrom + (parseFloat(getComputedStyle(this.id(from), null).height.replace("px", "")))/2;
        const x2 = leftTo + (parseFloat(getComputedStyle(this.id(to), null).width.replace("px", "")))/2;
        const y2 = topTo + (parseFloat(getComputedStyle(this.id(to), null).height.replace("px", "")))/2;
        this.id(arrow).setAttribute("x1", x1);
        this.id(arrow).setAttribute("y1", y1+15);
        this.id(arrow).setAttribute("x2", x2);
        this.id(arrow).setAttribute("y2", y2-20);
    }

    componentDidMount(){
        this.drawArrow("path1", "password", "combined");
        this.drawArrow("path2", "salt", "combined");
        this.drawArrow("path3", "combined", "algorithm");
        this.drawArrow("path4", "algorithm", "result");
        this.drawArrow("path5", "key", "algorithm");
    }

    render(){
        return(
            <div className="page">
                <div className="element" id="password">
                    <p>Password</p>
                </div>
                <div className="element" id="salt">
                    <select onChange={this.selectSalt}>
                        <option defaultValue value="nothing">Nothing</option>
                        <option value="username">Username</option>
                        <option value="salt">Unique per password salt</option>
                    </select>
                </div>

                <div className="element" id="combined">
                    <p>Password combined with above dropdown</p>
                </div>
                <div className="element" id="algorithm">                    
                    <select onChange={this.selectAlgorithm}>
                        <option defaultValue value="nothing">Please select an algorithm</option>
                        <option value="des">Symmetric Encryption (DES)</option>
                        <option value="aes">Symmetric Encryption (AES)</option>
                        <option value="rsa">Asymmetric Encryption (RSA)</option>
                        <option value="md5">Hash Function (MD5)</option>
                        <option value="sha">Hash Function (SHA-2)</option>
                        <option value="bcrypt">Hash Function (bcrypt)</option>
                    </select>
                </div>
                <div className="element" id="key">
                    <select>
                        <option defaultValue value="nothing">Please select a key to use with the algorithm</option>
                        <option value="des">Username</option>
                        <option value="aes">Password</option>
                        <option value="rsa">Random Number</option>
                    </select>
                </div>
                <div className="element" id="result">
                    <p>Result</p>
                </div>

                <div className="validate">
                    <button>Close</button>
                    <button onClick={this.validate}>Validate</button>
                </div>
                <svg width={document.body.clientWidth} height="1080">
                    <defs>
                        <marker markerWidth="13" markerHeight="13" id="arrow" orient="auto" refX="2" refY="6">
                            <path d="M2,1 L2,10 L10,6 L2,2"/>
                        </marker>
                    </defs>
                    <line id="path1" className="line" />
                    <line id="path2" className="line" />
                    <line id="path3" className="line" />
                    <line id="path4" className="line" />
                    <line id="path5" className="line" />
                </svg>
            </div>
        );
    }
}