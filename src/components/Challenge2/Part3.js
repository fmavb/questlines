import React, {Component} from 'react';
import './Part3.css';

export default class Part3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            alg1: "nothing",
            alg2: "nothing",
            alg3: "nothing",
            key1: "nothing",
            key2: "nothing",
            key3: "nothing",
        }
        this.id = this.id.bind(this);
        this.drawArrow = this.drawArrow.bind(this);
        this.drawArrow2 = this.drawArrow2.bind(this);
        this.initialState = this.initialState.bind(this);
        this.selectAlg1 = this.selectAlg1.bind(this);
        this.selectAlg2 = this.selectAlg2.bind(this);
        this.selectKey1 = this.selectKey1.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    static keyValues = ["des", "aes", "rsa"];

    selectKey1(e){
        this.setState({key1: e.target.value});
    }

    selectAlg1(e){
        const value = e.target.value;
        if (Part3.keyValues.includes(value)){
            this.id("key1").style.display = "inline";
            this.id("path2").style.display = "block";
            this.initialState();
        } else {
            this.id("key1").style.display = "none";
            this.id("path2").style.display = "none";
            this.initialState();
        }
        this.setState({alg1: value});
    }

    selectAlg2(e){
        const value = e.target.value;
        this.setState({alg2: value});
    }

    validate(){
        if (this.state.key1 === "rPrivate" && this.state.alg1 === "rsa" && this.state.alg2 === "aes"){
            alert("Correct!");
        }
        this.props.history.push('/challenge2/part3');
    }

    id(id){
        return document.getElementById(id);
    }

    drawArrow(arrow, from, to) {
        console.log(this.id(from));
        const rectFrom = this.id(from).getBoundingClientRect();
        const leftFrom = rectFrom.left + document.body.scrollLeft;
        const topFrom = rectFrom.top + document.body.scrollTop;
        const rectTo = this.id(to).getBoundingClientRect();
        const leftTo = rectTo.left + document.body.scrollLeft;
        const topTo = rectTo.top + document.body.scrollTop;
        const x1 = leftFrom + parseFloat(rectFrom.width)/2;
        const y1 = topFrom + parseFloat(rectFrom.height)/2;
        const x2 = leftTo + parseFloat(rectTo.width)/2;
        const y2 = topTo + parseFloat(rectTo.height)/2;
        this.id(arrow).setAttribute("x1", x1);
        this.id(arrow).setAttribute("y1", y1 + 20);
        this.id(arrow).setAttribute("x2", x2);
        this.id(arrow).setAttribute("y2", y2 - 20);
    }

    drawArrow2(arrow, from, to) {
        const rectFrom = this.id(from).getBoundingClientRect();
        const leftFrom = rectFrom.left + document.body.scrollLeft;
        const topFrom = rectFrom.top + document.body.scrollTop;
        const rectTo = this.id(to).getBoundingClientRect();
        const leftTo = rectTo.right + document.body.scrollLeft;
        const topTo = rectTo.top + document.body.scrollTop;
        const x1 = leftFrom + parseFloat(rectFrom.width);
        const y1 = topFrom + rectFrom.height/2;
        const x2 = leftTo;
        const y2 = topTo + rectTo.height/2;
        this.id(arrow).setAttribute("x1", x1 - 210);
        this.id(arrow).setAttribute("y1", y1);
        this.id(arrow).setAttribute("x2", x2 + 15);
        this.id(arrow).setAttribute("y2", y2);
    }

    initialState(){
        this.drawArrow("path1", "encKey", "alg1");
        this.drawArrow("path2", "key1", "alg1");
        this.drawArrow("path3", "encMessage", "alg2");
        this.drawArrow("path4", "alg1", "decKey");
        this.drawArrow2("path5", "decKey", "alg2");
        this.drawArrow("path6", "alg2", "decMessage");
    }

    componentDidMount(){
        this.id("key1").style.display = "none";
        this.id("path2").style.display = "none";
        this.initialState();
    }

    render(){
        return (
            <div className="page">
                <div className="element" id="row1">
                    <p id="encMessage">Encrypted Message</p>
                    <p id="encKey">Encrypted Encryption Key</p>
                    <select onChange={this.selectKey1} id="key1">
                        <option defaultValue value="nothing">Please select a key</option>
                        <option value="rPrivate">Recipients Private Key</option>
                        <option value="rPublic">Recipients Public Key</option>
                        <option value="sPublic">Sender's Public Key</option>
                        <option value="sPrivate">Sender's Private Key</option>
                        <option value="password">Sender's Password</option>
                        <option value="random">Randomly generated Key using a cryptographic generator</option>
                    </select>
                </div>
                <div className="element" id="row2">
                        <select onChange={this.selectAlg1} id="alg1">
                            <option defaultValue value="nothing">Please select an algorithm</option>
                            <option value="none">None</option>
                            <option value="des">Symmetric Encryption (DES)</option>
                            <option value="aes">Symmetric Encryption (AES)</option>
                            <option value="rsa">Asymmetric Encryption (RSA)</option>
                            <option value="md5">Hash Function (MD5)</option>
                            <option value="sha">Hash Function (SHA-2)</option>
                            <option value="bcrypt">Hash Function (bcrypt)</option>
                        </select>
                </div>
                <div className="element" id="row3">
                    <select onChange={this.selectAlg2} id="alg2">
                        <option defaultValue value="nothing">Please select an algorithm</option>
                        <option value="none">None</option>
                        <option value="des">Symmetric Encryption (DES)</option>
                        <option value="aes">Symmetric Encryption (AES)</option>
                        <option value="rsa">Asymmetric Encryption (RSA)</option>
                        <option value="md5">Hash Function (MD5)</option>
                        <option value="sha">Hash Function (SHA-2)</option>
                        <option value="bcrypt">Hash Function (bcrypt)</option>
                    </select>
                    <p id="decKey">Decrypted Encryption Key</p>
                </div>
                <div className="element" id="row4">
                    <p id="decMessage">Decrypted message</p>
                </div>
                <div className="validate">
                    <button>Close</button>
                    <button onClick={this.validate}>Validate</button>
                </div>
                <svg width={document.body.clientWidth} height="1080">
                    <defs>
                        <marker markerWidth="13" markerHeight="13" id="arrow" orient="auto" refX="2" refY="6">
                            <path d="M2,1 L2,10 L10,6 L2,2" />
                        </marker>
                    </defs>
                    <line id="path1" className="line" />
                    <line id="path2" className="line" />
                    <line id="path3" className="line" />
                    <line id="path4" className="line" />
                    <line id="path5" className="line" />
                    <line id="path6" className="line" />
                    <line id="path7" className="line" />
                    <line id="path8" className="line" />
                    <line id="path9" className="line" />
                </svg>
            </div>
        );
    }
}