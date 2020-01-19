import React, { Component } from "react";
import "./Challenge1.css"

export default class Challenge1 extends Component {

    constructor(props) {
        super(props);
        this.state = { cipher: "ABCD", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", shiftedAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected: "caesar", algorithm: "caesar", binKey:"00000000", binChar:"00000000" };
        this.shiftAlphabet = this.shiftAlphabet.bind(this);
        this.selector = this.selector.bind(this);
        this.decrypt = this.decrypt.bind(this);
        this.toBinary = this.toBinary.bind(this);
        this.keyToBin = this.keyToBin.bind(this);
        this.charToBin = this.charToBin.bind(this);
        this.xOR = this.xOR.bind(this);
        this.id = this.id.bind(this);
        this.changeChar = this.changeChar.bind(this);
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
        this.decrypt(char);
    }

    decrypt(char) {
        let upperChar = char.toUpperCase();
        if (upperChar.match(/[A-Z]/i)) {
            let position = this.state.alphabet.indexOf(upperChar);
            this.setState({ decryptedChar: this.state.shiftedAlphabet[position] });
        } else {
            return;
        }
    }

    keyToBin(e) {
        this.setState({binKey: this.toBinary(e.target.value) + this.toBinary(e.target.value)});
        this.xOR(this.state.binChar, this.state.binKey);
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
        this.xOR(this.state.binChar, this.state.binKey);
    }

    toBinary(value){
        value = parseInt(value);
        value = value.toString(2);
        for (let i = value.length; i < 4; i++){
            value = "0" + value; 
        }
        return value;
    }
    xOR(char, key){
        char = parseInt(char, 2);
        key = parseInt(key, 2);
        const result = char ^ key;
        let outputString = result.toString(2);
        for (let i = outputString.length; i < 4; i++){
            outputString = "0" + outputString; 
        }
        this.setState({xOR: outputString});
        this.setState({decryptedChar: String.fromCharCode(result)});
    }

    render() {
        if (this.state.algorithm === "caesar") {
            return (
                <div>
                    <div className="field">
                        <label>Cipher:</label><input disabled value={this.state.cipher}></input>
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
                    </div>
                    <div className="field">
                        <label>Shifted Alphabet:</label><input disabled value={this.state.shiftedAlphabet} id="shiftedAlphabet" size="50"></input>
                    </div>
                    <div className="field">
                        <label>Encrypted Character:</label><input disabled value={this.state.decryptedChar}></input>
                    </div>
                    <div className="field">
                        <label>Decrypted Message:</label><input></input>
                    </div>
                    <div>
                        <button>Close</button>
                        <button>Validate</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="field">
                        <label>Cipher:</label><input disabled value={this.state.cipher}></input>
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
                        <label>Decrypted Message:</label><input></input>
                    </div>
                    <div>
                        <button>Close</button>
                        <button>Validate</button>
                    </div>
                </div>
            );
        }
    }
}