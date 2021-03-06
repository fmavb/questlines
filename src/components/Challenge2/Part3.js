import React, {Component} from 'react';
import './Part3.css';
import { evaluation, id } from '../../../package.json';


export default class Part3 extends Component {
    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 3";
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
        this.points = 100;
        this.startTime = new Date().getTime();
        this.attempts = 1;
        this.submissions = [];
        this.alg1 = {
            "none": "This does not result in a decrypted message.",
            "md5": "MD5 does not result in a decrypted message.",
            "sha": "SHA-2 does not result in a decrypted message.",
            "bcrypt": "bcrypt does not result in a decrypted message.",
            "rsa": "RSA results in a decrypted message, however RSA takes fixed size plaintext, and messages usually do not have a fixed length.",
            "des": "DES results in a decrypted message, however DES is outdated and vulnerable, so this is not an optimal choice.",
            "aes": "AES results in a decrypted message.",
        };
        this.alg2 = {
            "none": "This does not result in a decrypted key.",
            "md5": "MD5 does not result in a decrypted key.",
            "sha": "SHA-2 does not result in a decrypted key.",
            "bcrypt": "bcrypt does not result in a decrypted key.",
            "rsa": "RSA results in a decrypted key.",
            "des": "DES results in a decrypted key, however DES is outdated and vulnerable, also this is not a secure way to communicate a key, so this is not an optimal choice.",
            "aes": "AES results in a decrypted key, however this is not a secure way to communicate a key, so this is not an optimal choice..",
        };
        this.key1 = {
            "nothing": "Please choose a key.",
            "rPrivate": "This is the correct choice.",
            "rPublic": "This is the correct choice. Also, this is the key that is kept secret.",
            "sPublic": "In asymmetric cryptography, the keys are encrypted and decrypted with the receiver's keys, not the sender's.",
            "sPrivate": "In asymmetric cryptography, the keys are encrypted and decrypted with the receiver's keys, not the sender's.",
            "password": "Using the sender's password is not correct. If the password is compromised, all messages encrypted with it are also compromised. " + 
            "Moreover, asymmetric cryptography requires keys of fixed size, and password have usually different lengths.",
            "random": "Randomly generated keys are not used for asymmetric cryptography.",
        };
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
        this.submissions.push({
            key1: this.state.key1,
            alg1: this.state.alg1,
            alg2: this.state.alg2,
        });
        if (this.state.key1 === "rPrivate" && this.state.alg1 === "rsa" && this.state.alg2 === "aes"){
            const request = new XMLHttpRequest();
            request.open("POST", "https://3m804nvp5i.execute-api.eu-west-2.amazonaws.com/dev/part3");
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify({"score": this.points}));
            if (evaluation){
                const endTime = new Date().getTime();
                const evalRequest = new XMLHttpRequest();
                evalRequest.open("POST", "https://3m804nvp5i.execute-api.eu-west-2.amazonaws.com/dev/evaluation/challenge2/part3");
                evalRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                evalRequest.send(JSON.stringify({
                    "part": 3,
                    "attempts": this.attempts,
                    "score": this.points,
                    "timeTaken": endTime - this.startTime,
                    "id": id,
                }));
                console.log(evalRequest.response);
            }
            alert("Correct! You got " + this.points + " points");
            this.props.history.push('/challenge2/part3/explanation');
        } else {
            this.attempts++;
            if (this.state.alg2 === "aes" && this.state.alg1 === "rsa"){
                this.points -= 5;
                alert("The algorithm choice is correct. However, " + this.key1[this.state.key1]);
            } else {
                this.points -= 25;
                alert(this.alg1[this.state.alg1] + " " + this.alg2[this.state.alg2]);
            }
        }
    }

    id(id){
        return document.getElementById(id);
    }

    drawArrow(arrow, from, to) {
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
        this.id(arrow).setAttribute("y1", y1 + 15);
        this.id(arrow).setAttribute("x2", x2);
        this.id(arrow).setAttribute("y2", y2 - 25);
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
        this.id(arrow).setAttribute("y1", y1 - 0);
        this.id(arrow).setAttribute("x2", x2 + 15);
        this.id(arrow).setAttribute("y2", y2 - 0);
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
            <div className="challenge">
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
            </div>
        );
    }
}