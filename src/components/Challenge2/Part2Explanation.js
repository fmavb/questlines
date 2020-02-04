import React, { Component } from 'react';


export default class Part2Explanation extends Component {

    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 2 - Explanation";
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
    }

    back(){
        this.props.history.push("/challenge2/part2");
    }

    next(){
        this.props.history.push("/challenge2/part3");
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <h1>Encrypt and Send a Message Explanation</h1>
                <div className="container">
                    In this challenge, you are asked to represent graphically how you would establish a secure communication
                    by encrypting a message.
                    <br />
                    There are two problems you have to solve in this challenge:
                    <ul>
                        <li>The first and most obvious problem is encrypting the message;</li>
                        <li>The second problem is encrypting the key used to encrypt the message since sharing it as is
                            cancels out the encryption.
                        </li>
                    </ul>
                    To encrypt the message, you should use symmetric encryption. 
                    Asymmetric encryption is slower compared to symmetric encryption. 
                    This is due to the number theory behind the algorithms.
                    Therefore, you should use symmetric encryption to encrypt the message 
                    since the message will probably be longer than the fixed size plaintext 
                    required for asymmetric cryptography. 
                    In the "real world", you will have to split up the message into different pieces before encrypting it
                    when using symmetric cryptography.
                    That said, you should not split up the message yourself as that may result in vulnerabilities.
                    Good and well-documented cryptographic APIs will usually do this for you.
                    Finally, you also need to generate a key to encrypt the message. Do not try to "invent" a key yourself,
                    or to reuse a key (or password). You should use a cryptographic random number generator instead.
                    <br />
                    <br />
                    To send the key for the message, you should use asymmetric encryption. 
                    Asymmetric cryptography has two keys:
                    <ul>
                        <li>Public key: </li>
                        <li>Private key: </li>
                    </ul>
                    <br />
                    <br />
                    <b>DISCLAIMER:</b> You should avoid writing your own encryption algorithms or manipulating them at all cost. 
                    People before you have tried and failed.
                    <div>
                        <button onClick={this.back} style={{margin: "25px"}}>Retry the previous challenge</button>
                        <button onClick={this.next} style={{margin: "25px"}}>Next challenge</button>
                    </div>
                </div>
            </div>
        );
    }
}