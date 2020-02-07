import React, { Component } from 'react';

export default class Part3Explanation extends Component{

    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 3 - Explanation";
        this.back = this.back.bind(this);
    }

    back(){
        this.props.history.push("/challenge2/part3");
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <h1>Receive and Decrypt a Message: Explanation</h1>
                <div className="container">
                    In this challenge, you are asked to decrypt the message you encrypted in the previous challenge.
                    So, you have to perform the reverse operation you performed in the previous challenge.
                    <br />
                    <br />
                    To decrypt the key and the message, 
                    you should use the algorithm you used to encrypt it. Remember to use the correct key.
                    <br />
                    <br />
                    To get more hints, remember the explanation from the previous message.
                    <div>
                        <button onClick={this.back} style={{margin: "25px"}}>Retry the previous challenge</button>
                    </div>
                </div>
            </div>
        );
    }
}