import React, { Component } from "react";
import "./Challenge1.css"

export default class Challenge1 extends Component {

    constructor(props){
        super(props);
        this.state = {cipher : "ABCD", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", shiftedAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected:"Caesar", algorithm: "caesar"};
        this.shiftAlphabet = this.shiftAlphabet.bind(this);
        this.selector = this.selector.bind(this);
        this.decrypt = this.decrypt.bind(this);
    }
    
    shiftAlphabet(e){
        let value = parseInt(e.target.value);
        const alphabetLength = 26;
        if (value === 0) {
            this.setState({shiftedAlphabet:this.state.alphabet});
        } else if (value > 0) {
            value = value % alphabetLength;
            let shift = this.state.alphabet.substring(value, alphabetLength);
            shift = shift + this.state.alphabet.substring(0, value);
            this.setState({shiftedAlphabet:shift});
        } else {
            value = value % alphabetLength;
            let shift = this.state.alphabet.substring(0, alphabetLength + value);
            shift = this.state.alphabet.substring(alphabetLength + value, alphabetLength) + shift;
            this.setState({shiftedAlphabet: shift});
        }
    }
    selector(e){
        this.setState({algorithm: e.target.value});
    }

    decrypt(e){
        const char = e.target.value;
        let upperChar = char.toUpperCase();
        if (upperChar.match(/[A-Z]/i)){
            let position = this.state.alphabet.indexOf(upperChar);
            this.setState({decryptedChar: this.state.shiftedAlphabet[position]});
        } else {
            return;
        }
    }

    render() {
        return (
            <div>
                <div class="field">
                    <label>Cipher:</label><input disabled value={this.state.cipher}></input>
                </div>
                <div class="field">
                    <label>Algorithm Selector:</label>
                    <select onChange={this.selector}>
                        <option value="caesar" selected>Caesar Cipher</option>
                        <option value="xor">XOR Encryption</option>
                    </select>
                </div>
                <div class="field">
                    <label>Character:</label><input maxLength="1" onChange={this.decrypt}></input>
                </div>
                <div class="field">
                    <label>Alphabet Rotate Key:</label><input type="number" defaultValue="0" onChange={this.shiftAlphabet}></input>
                </div>
                <div class="field">
                    <label>Shifted Alphabet:</label><input disabled value={this.state.shiftedAlphabet}></input>
                </div>
                <div class="field">
                    <label>Encrypted Character:</label><input disabled value={this.state.decryptedChar}></input>
                </div>
                <div class="field">
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