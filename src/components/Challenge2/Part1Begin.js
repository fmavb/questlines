import React, { Component } from 'react';

export default class Part1Begin extends Component{
    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 1";
        this.next = this.next.bind(this);
    }

    next(){
        this.props.history.push('/challenge2/part1');
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
                <h1>Sign in / Sign Up</h1>
                <div className="container">
                    This is the first part of challenge 1. Using the diagram provided,
                    create a secure way to provide authentication for the users.
                    <br />
                    <div id="buttons">
                        <button onClick={this.next} style={{margin: "25px"}}>Start challenge</button>
                    </div>
                </div>
            </div>
        );
    }
}