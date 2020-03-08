import React, { Component } from 'react';

export default class Explanation extends Component{
    constructor(props){
        super(props);
        document.title = "Challenge 1 - Explanation";
        this.back = this.back.bind(this);
    }

    back(){
        this.props.history.push('/challenge1/decryptor');
    }

    render(){
        return (<div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"/>
            <h1>Challenge 1 Explanation</h1>
            <div className="container">
                This challenge presented one type of symmetric cryptographic algorithms.
                The Caesar cipher and the XOR cipher are stream ciphers. 
                Stream ciphers are one type of algorithms used in symmetric cryptography. 
                The other type is block cipher. 
                In stream ciphers, one digit from the plaintext is combined with one digit from the key to form the cipher.
                In block ciphers, one group of digits from is combined with digits from the key to form the cipher.

                <br />
                <br />
                
                If you want to try the challenge again, please click on "Retry". Otherwise, you can close the window.

                <br />
                <br />

                <b>DISCLAIMER:</b> You should avoid making your own cryptographic functions at all cost. 
                People before you have tried and failed!
                <div className="buttons">
                    <button onClick={this.back} style={{margin: "25px"}}>Retry the previous challenge</button>
                </div>
            </div>
        </div>);
    }
}