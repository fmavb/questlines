import React, { Component } from 'react';

export default class Part3Begin extends Component{
    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 3";
        this.next = this.next.bind(this);
    }

    next(){
        this.props.history.push("/challenge2/part3");
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <h1>Decrypting the Message</h1>
                Decrypt the message and the key you sent in the previous part of this challenge.
                You can assume that each user has a private and public key.
                <br />
                <button onClick={this.next}>Start Challenge</button>
            </div>
        );
    }

}