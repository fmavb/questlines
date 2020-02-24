import React, { Component } from "react";
import "./Challenge1.css"
import { evaluation } from '../../package.json';

export default class Challenge1 extends Component {

    constructor(props) {
        super(props);
        this.state = { cipher: "TLLA TL HA AOL JVMMLL ZOVW. JYFWAV QLKP.", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
            shiftedAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected: "caesar", algorithm: "caesar", binKey:"00000000", 
            binChar:"00000000", char: "", message: "" };
        this.shiftAlphabet = this.shiftAlphabet.bind(this);
        this.selector = this.selector.bind(this);
        this.decrypt = this.decrypt.bind(this);
        this.toBinary = this.toBinary.bind(this);
        this.keyToBin = this.keyToBin.bind(this);
        this.charToBin = this.charToBin.bind(this);
        this.xOR = this.xOR.bind(this);
        this.id = this.id.bind(this);
        this.changeChar = this.changeChar.bind(this);
        this.close = this.close.bind(this);
        this.message = this.message.bind(this);
        this.validate = this.validate.bind(this);
        this.answer = "MEET ME AT THE COFFEE SHOP. CRYPTO JEDI."
        this.points = 100;
        this.attempts = 1;
        this.startTime = new Date().getTime();
        document.title = "Challenge 1";
    }

    shiftAlphabet(e) {
        let value = parseInt(e.target.value);
        const alphabetLength = 26;
        if (value === 0) {
            this.setState({ shiftedAlphabet: this.state.alphabet });
        } else if (value > 0) {
            value = value % alphabetLength;
            let shift = this.state.alphabet.substring(value, alphabetLength);
            shift = shift + this.state.alphabet.substring(0, value);
            this.setState({ shiftedAlphabet: shift });
        } else {
            value = value % alphabetLength;
            let shift = this.state.alphabet.substring(0, alphabetLength + value);
            shift = this.state.alphabet.substring(alphabetLength + value, alphabetLength) + shift;
            this.setState({ shiftedAlphabet: shift });
        }
    }
    selector(e) {
        this.setState({ algorithm: e.target.value });
    }

    changeChar(e){
        const char = e.target.value;
        this.setState({char: char});
    }

    decrypt() {
        const char = this.state.char;
        let upperChar = char.toUpperCase();
        if (upperChar.match(/[A-Z]/i)) {
            let position = this.state.alphabet.indexOf(upperChar);
            const decryptedChar = this.state.shiftedAlphabet[position];
            this.setState({decryptedChar: decryptedChar});
        } else {
            return;
        }
    }

    keyToBin(e) {
        this.setState({binKey: this.toBinary(e.target.value) + this.toBinary(e.target.value)});
    }
    id(name){
        return document.getElementById(name);
    }
    charToBin(e){
        const value = e.target.value;
        let binString = value.charCodeAt(0).toString(2);
        for (let i = binString.length; i < 8; i++){
            binString = "0" + binString;
        }
        this.setState({binChar: binString});
    }

    toBinary(value){
        value = parseInt(value);
        value = value.toString(2);
        for (let i = value.length; i < 4; i++){
            value = "0" + value; 
        }
        return value;
    }
    xOR(){
        const char = parseInt(this.state.binChar,2)
        const key = parseInt(this.state.binKey, 2);
        const result = char ^ key;
        let outputString = result.toString(2);
        for (let i = outputString.length; i < 4; i++){
            outputString = "0" + outputString; 
        }
        this.setState({xOR: outputString});
        this.setState({decryptedChar: String.fromCharCode(result)});
    }

    close(e){
        window.close();
    }

    message(e){
        const message = e.target.value;
        this.setState({message: message});
    }

    validate(){
        let message = this.state.message;
        if (message === ""){
            alert("Please enter the decrypted message in the box provided");
            return;
        }
        message = message.toUpperCase();
        if (message === this.answer){
            const endTime = new Date().getTime();
            const request = new XMLHttpRequest();
            request.open("POST", "https://0xs5mk4j9d.execute-api.eu-west-2.amazonaws.com/dev/challenge1");
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify({"score": this.points}));
            console.log();
            if (evaluation){
                const evalRequest = new XMLHttpRequest();
                evalRequest.open("POST", "https://0xs5mk4j9d.execute-api.eu-west-2.amazonaws.com/dev/evaluation/challenge1");
                evalRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                evalRequest.send(JSON.stringify({
                    "score": this.points,
                    "attempts": this.attempts,
                    "timeTaken": endTime - this.startTime,
                    "id": 0,
                }));
                console.log(evalRequest.response);
            }
            alert("Correct! You got " + this.points + " points. You can close the challenge!");
        } else {
            alert("Incorrect! Please try again.");
            this.attempts++;
            if (this.points > 0){
                this.points -= 25;
            }
        }
    }

    render() {
        if (this.state.algorithm === "caesar") {
            return (
                <div>
                    <div className="field">
                        <label>Cipher:</label><input disabled value={this.state.cipher} id="cipher" size="50"></input>
                    </div>
                    <div className="field">
                        <label>Algorithm Selector:</label>
                        <select defaultValue= "caesar" onChange={this.selector}>
                            <option value="caesar">Caesar Cipher</option>
                            <option value="xor">XOR Encryption</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Character:</label><input maxLength="1" onChange={this.changeChar}></input>
                    </div>
                    <div className="field">
                        <label>Alphabet Rotate Key:</label><input type="number" defaultValue="0" onChange={this.shiftAlphabet}></input>
                        <button onClick={this.decrypt}>Decrypt</button>
                    </div>
                    <div className="field">
                        <label>Shifted Alphabet:</label><input disabled value={this.state.shiftedAlphabet} id="shiftedAlphabet" size="50"></input>
                    </div>
                    <div className="field">
                        <label>Encrypted Character:</label><input disabled value={this.state.decryptedChar}></input>
                    </div>
                    <div className="field">
                        <label>Decrypted Message:</label><input onChange={this.message} size="50"></input>
                    </div>
                    <div>
                        <button onClick={this.validate}>Validate</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="field">
                        <label>Cipher:</label><input disabled value={this.state.cipher} id="cipher" size="50"></input>
                    </div>
                    <div className="field">
                        <label>Algorithm Selector:</label>
                        <select defaultValue="xor" onChange={this.selector}>
                            <option value="caesar">Caesar Cipher</option>
                            <option value="xor">XOR Encryption</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Character:</label><input maxLength="1" onChange={this.charToBin}></input>
                    </div>
                    <div className="field">
                        <label>Character in binary (ASCII):</label><input disabled value={this.state.binChar}></input>
                    </div>
                    <div className="field">
                        <label>Key:</label><input type="number" defaultValue="0" min="0" max="15" onChange={this.keyToBin}></input>
                        <button onClick={this.xOR}>Decrypt</button>
                    </div>
                    <div className="field">
                        <label>Key in binary (repeated twice):</label><input disabled value={this.state.binKey}></input>
                    </div>
                    <div className="field">
                        <label>Result in binary:</label><input disabled value={this.state.xOR}></input>
                    </div>
                    <div className="field">
                        <label>Resulting character:</label><input disabled value={this.state.decryptedChar}></input>
                    </div>
                    <div className="field">
                        <label>Decrypted Message:</label><input size="50"></input>
                    </div>
                    <div>
                        <button onClick={this.validate}>Validate</button>
                    </div>
                </div>
            );
        }
    }
}