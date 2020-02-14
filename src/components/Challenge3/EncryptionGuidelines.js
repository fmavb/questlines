import React, { Component } from 'react';

export default class EncryptionGuidelines extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Encryption Guidelines</h1>
                This document presents the guidelines for the encryption of patient data.
                The encryption relies on the DES algorithm with no file integrity verification.
                <br />
                Procedure for file encryption:
                <ol>
                    <li>Generate a random key from the random generator</li>
                    <li>Copy the generated key</li>
                    <li>Open the encryption software, select the file to encrypt, and paste the key</li>
                    <li>Delete the file after encryption</li>
                    <li>Done!</li>
                </ol>
            </div>
        );
    }
}