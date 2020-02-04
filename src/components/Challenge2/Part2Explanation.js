import React, { Component } from 'react';


export default class Part2Explanation extends Component {

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
                        <li>The first and most obvious problem is encrypting the message</li>
                        <li>The second problem is encrypting the key used to encrypt the message since sharing it as is
                            cancels out the encryption.
                        </li>
                    </ul>
                    <b>DISCLAIMER:</b> You should avoid writing your own encryption algorithms at all cost. 
                    People before you have tried and failed.
                    <div>
                        <button style={{margin: "25px"}}>Retry the previous challenge</button>
                        <button style={{margin: "25px"}}>Next challenge</button>
                    </div>
                </div>
            </div>
        );
    }
}