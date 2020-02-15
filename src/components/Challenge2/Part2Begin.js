import React, { Component } from 'react';

export default class Part2Begin extends Component{
    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 2";
        this.next = this.next.bind(this);
    }

    next(){
        this.props.history.push("/challenge2/part2");
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <h1>Encrypt and Send a Message</h1>
                Encrypt the message, and its encryption key so that it can be sent securely.
                You can assume that each user has a private and public key.
                <br />
                <button onClick={this.next}>Start Challenge</button>
            </div>
        );
    }

}