import React, { Component } from 'react';
import './Part2.css';

export default class Part2 extends Component {
    constructor(props) {
        super(props);
        document.title = "Challenge 2 - Part 2";
        this.state = {
            alg1: "nothing",
            alg2: "nothing",
            alg3: "nothing",
            key1: "nothing",
            key2: "nothing",
            key3: "nothing",
        }
        this.selectAlg1 = this.selectAlg1.bind(this);
        this.selectAlg2 = this.selectAlg2.bind(this);
        this.selectAlg3 = this.selectAlg3.bind(this);
        this.selectKey1 = this.selectKey1.bind(this);
        this.selectKey2 = this.selectKey2.bind(this);
        this.selectKey3 = this.selectKey3.bind(this);
        this.drawArrow = this.drawArrow.bind(this);
        this.id = this.id.bind(this);
        this.initialState = this.initialState.bind(this);
        this.drawArrow2 = this.drawArrow2.bind(this);
        this.validate = this.validate.bind(this);
        this.points = 100;
        this.alg1 = {
            "none": "This does not result in a hashed message.",
            "md5": "MD5 results in a hashed message, however this algorithm is outdated, so this is not an optimal choice.",
            "sha": "SHA-2 results in a hashed message.",
            "bcrypt": "bcrypt results in a hashed message, however this algorithm is slow, so this is not an optimal choice.",
            "rsa": "RSA does not result in a hashed message.",
            "des": "DES does not result in a hashed message.",
            "aes": "AES does not result in a hashed message.",
        };
        this.alg2 = {
            "none": "This does not result in an encrypted message. Hashes cannot be decrypted.",
            "md5": "MD5 does not result in an encrypted message. Hashes cannot be decrypted.",
            "sha": "SHA-2 does not result in an encrypted message. Hashes cannot be decrypted.",
            "bcrypt": "bcrypt does not result in an encrypted message. Hashes cannot be decrypted.",
            "rsa": "RSA results in an encrypted message, however RSA takes fixed size plaintext, and messages usually do not have a fixed length",
            "des": "DES results in an encrypted message, however DES is outdated and vulnerable, so this is not an optimal choice",
            "aes": "AES results in an encrypted message.",
        };
        this.alg3 = {
            "none": "This does not result in an encrypted key.",
            "md5": "MD5 does not result in an encrypted key.",
            "sha": "SHA-2 does not result in an encrypted key.",
            "bcrypt": "bcrypt does not result in an encrypted key.",
            "rsa": "RSA results in an encrypted key. The choice of algorithm is correct.",
            "des": "DES results in an encrypted key, however this solution requires to store the key that is used to encrypt the message key.",
            "aes": "DES results in an encrypted key, however this solution requires to store the key that is used to encrypt the message key.",
        };
        this.key2 = {
            "nothing": "Please choose a key for the second algorithm.",
            "rPrivate": "Private and public keys are used for asymmetric (or public key) cryptography.",
            "rPublic": "Private and public keys are used for asymmetric (or public key) cryptography.",
            "sPublic": "Private and public keys are used for asymmetric (or public key) cryptography.",
            "sPrivate": "Private and public keys are used for asymmetric (or public key) cryptography.",
            "password": "Using the sender's password is not correct. If the password is compromised, all messages encrypted with it are also compromised. " + 
            "Moreover, symmetric cryptography requires keys of fixed size, and password have usually different lengths.",
            "random": "This is the correct key choice.",
        };
        this.key3 = {
            "nothing": "Please choose a key for the third algorithm.",
            "rPrivate": "The private key is used to decrypt the key, not to encrypt it. Also, this is the key that is kept secret.",
            "rPublic": "This is the correct key choice.",
            "sPublic": "In asymmetric cryptography, the keys are encrypted with the receiver's public key, not the sender's.",
            "sPrivate": "In asymmetric cryptography, the keys are encrypted with the receiver's public key, not the sender's.",
            "password": "Using the sender's password is not correct. If the password is compromised, all messages encrypted with it are also compromised. " + 
            "Moreover, asymmetric cryptography requires keys of fixed size, and password have usually different lengths.",
            "random": "Randomly generated keys are not used for asymmetric cryptography.",
        };
    }
    static keyValues = ["des", "aes", "rsa"];

    selectKey1(e) {
        this.setState({ key1: e.target.value });
    }

    selectKey2(e) {
        this.setState({ key2: e.target.value });
    }

    selectKey3(e) {
        this.setState({ key3: e.target.value });
    }

    selectAlg1(e) {
        const value = e.target.value;
        if (Part2.keyValues.includes(value)) {
            document.getElementById("key1").style.display = "inline";
            this.id("path6").style.display = "inline";
            this.drawArrow2("path6", "key1", "alg1");
        } else {
            document.getElementById("key1").style.display = "none";
            this.id("path6").style.display = "none";
            this.setState({key1: "nothing"});
        }
        this.initialState();
        this.setState({ alg1: value });
    }

    selectAlg2(e) {
        const value = e.target.value;
        if (Part2.keyValues.includes(value)) {
            document.getElementById("key2").style.display = "inline";
            this.id("path7").style.display = "inline";
            this.id("path9").style.display = "inline";
            this.drawArrow("path7", "key2", "alg2");
            this.drawArrow("path9", "key2", "alg3");
        } else {
            document.getElementById("key2").style.display = "none";
            this.id("path7").style.display = "none";
            this.id("path9").style.display = "none";
        }
        this.initialState();
        this.setState({ alg2: value });
    }

    selectAlg3(e) {
        const value = e.target.value;
        if (Part2.keyValues.includes(value)) {
            document.getElementById("key3").style.display = "inline";
            this.id("path8").style.display = "inline";
            this.drawArrow("path8", "key3", "alg3");
            this.drawArrow("path9", "key2", "alg3");
        } else {
            document.getElementById("key3").style.display = "none";
            this.id("path8").style.display = "none";
        }
        this.initialState();
        this.setState({ alg3: value });
    }

    id(id) {
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
        this.id(arrow).setAttribute("y1", y1 - 110);
        this.id(arrow).setAttribute("x2", x2);
        this.id(arrow).setAttribute("y2", y2 - 150);
    }

    drawArrow2(arrow, from, to) {
        const rectFrom = this.id(from).getBoundingClientRect();
        const leftFrom = rectFrom.left + document.body.scrollLeft;
        const topFrom = rectFrom.top + document.body.scrollTop;
        const rectTo = this.id(to).getBoundingClientRect();
        const leftTo = rectTo.left + document.body.scrollLeft;
        const topTo = rectTo.top + document.body.scrollTop;
        const x1 = leftFrom + parseFloat(rectFrom.width);
        const y1 = topFrom + rectFrom.height/2;
        const x2 = leftTo;
        const y2 = topTo + rectTo.height/2;
        this.id(arrow).setAttribute("x1", x1 + 5);
        this.id(arrow).setAttribute("y1", y1 - 125);
        this.id(arrow).setAttribute("x2", x2 - 10);
        this.id(arrow).setAttribute("y2", y2 - 125);
    }

    initialState(){
        this.drawArrow("path1", "messageBox", "alg1");
        this.drawArrow("path2", "messageBox", "alg2");
        this.drawArrow("path3", "alg1", "hashMessage");
        this.drawArrow("path4", "alg2", "encMessage");
        this.drawArrow("path5", "alg3", "encKey");
        this.drawArrow2("path6", "key1", "alg1");
        this.drawArrow("path7", "key2", "alg2");
        this.drawArrow("path8", "key3", "alg3");
        this.drawArrow("path9", "key2", "alg3");
    }

    validate(){
        if (this.state.alg1 === "sha" && this.state.alg2 === "aes" && this.state.alg3 === "rsa"
            && this.state.key1 === "nothing" && this.state.key2 === "random" && this.state.key3 === "rPublic"){
                alert("Correct! You get " + this.points + " points");
                this.props.history.push("/challenge2/part3");
            }
        else {
            if (this.state.alg1 === "sha" && this.state.alg2 === "aes" && this.state.alg3 === "rsa"){
                alert("The choice of algorithms are correct. However, " + this.key2[this.state.key2] + " " +
                    this.key3[this.state.key3]);
                if (this.points > 0){
                    this.points -= 5;
                }
            } else {
                alert(this.alg1[this.state.alg1] + " " + this.alg2[this.state.alg2] + " " + 
                    this.alg3[this.state.alg3]);
                if (this.points > 0){
                    this.points -= 25;
                }
            }
        }
    }

    componentDidMount() {
        document.getElementById("key1").style.display = "none";
        document.getElementById("key2").style.display = "none";
        document.getElementById("key3").style.display = "none";
        this.initialState();
        this.id("path6").style.display = "none";
        this.id("path7").style.display = "none";
        this.id("path8").style.display = "none";
        this.id("path9").style.display = "none";
    }

    render() {
        return (
            <div className="challenge">
                <h1>Encrypt and Send a Message</h1>
                Encrypt the message, and its encryption key so that it can be sent securely.
            <div className="page">
                <div id="keys">
                <div className="element" id="message">
                    <p id="messageBox">Message</p>
                </div>
                    <select onChange={this.selectKey2} id="key2">
                        <option defaultValue value="nothing">Please select a key</option>
                        <option value="rPrivate">Recipients Private Key</option>
                        <option value="rPublic">Recipients Public Key</option>
                        <option value="sPublic">Sender's Public Key</option>
                        <option value="sPrivate">Sender's Private Key</option>
                        <option value="password">Sender's Password</option>
                        <option value="random">Randomly generated Key using a cryptographic generator</option>
                    </select>
                    <select onChange={this.selectKey3} id="key3">
                        <option defaultValue value="nothing">Please select a key</option>
                        <option value="rPrivate">Recipients Private Key</option>
                        <option value="rPublic">Recipients Public Key</option>
                        <option value="sPublic">Sender's Public Key</option>
                        <option value="sPrivate">Sender's Private Key</option>
                        <option value="password">Sender's Password</option>
                        <option value="random">Randomly generated Key using a cryptographic generator</option>
                    </select>
                </div>
                <div className="container">
                    <div className="element" id="alg">
                        <select onChange={this.selectKey1} id="key1">
                            <option defaultValue value="nothing">Please select a key</option>
                            <option value="rPrivate">Recipients Private Key</option>
                            <option value="rPublic">Recipients Public Key</option>
                            <option value="sPublic">Sender's Public Key</option>
                            <option value="sPrivate">Sender's Private Key</option>
                            <option value="password">Sender's Password</option>
                            <option value="random">Randomly generated Key using a cryptographic generator</option>
                        </select>
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
                        <select onChange={this.selectAlg3} id="alg3">
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
                </div>
                <div className="element" id="hashMessage">
                    <p>Hashed message</p>
                </div>
                <div className="element" id="encMessage">
                    <p>Encrypted Message</p>
                </div>
                <div className="element" id="encKey">
                    <p>Encrypted Encryption Key</p>
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
