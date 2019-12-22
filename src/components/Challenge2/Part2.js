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
                <div className="element" id="key">
                    <p>Encryption Key</p>
                </div>
                <div className="container">
                <div className="element" id="alg1">
                    <select>
                    <option defaultValue value="nothing">Please select an algorithm</option>
                        <option value="des">Symmetric Encryption (DES)</option>
                        <option value="aes">Symmetric Encryption (AES)</option>
                        <option value="rsa">Asymmetric Encryption (RSA)</option>
                        <option value="md5">Hash Function (MD5)</option>
                        <option value="sha">Hash Function (SHA-2)</option>
                        <option value="bcrypt">Hash Function (bcrypt)</option>
                    </select>
                    <select>
                    <option defaultValue value="nothing">Please select an algorithm</option>
                        <option value="des">Symmetric Encryption (DES)</option>
                        <option value="aes">Symmetric Encryption (AES)</option>
                        <option value="rsa">Asymmetric Encryption (RSA)</option>
                        <option value="md5">Hash Function (MD5)</option>
                        <option value="sha">Hash Function (SHA-2)</option>
                        <option value="bcrypt">Hash Function (bcrypt)</option>
                    </select>
                    <select>
                    <option defaultValue value="nothing">Please select an algorithm</option>
                        <option value="des">Symmetric Encryption (DES)</option>
                        <option value="aes">Symmetric Encryption (AES)</option>
                        <option value="rsa">Asymmetric Encryption (RSA)</option>
                        <option value="md5">Hash Function (MD5)</option>
                        <option value="sha">Hash Function (SHA-2)</option>
                        <option value="bcrypt">Hash Function (bcrypt)</option>
                    </select>
                </div>
                <span></span>                
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
            </div>
        );
    }
}
