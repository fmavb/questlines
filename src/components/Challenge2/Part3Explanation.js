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

                    <div>
                        <button onClick={this.back} style={{margin: "25px"}}>Retry the previous challenge</button>
                    </div>
                </div>
            </div>
        );
    }
}