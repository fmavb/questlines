import React, {Component} from 'react';

export default class RandomGenerator extends Component{
    constructor(props){
        super(props);
        this.startKey = "0x7133743677397A24432646294A404E60";
        this.state = {key: this.startKey.toString()};
        this.generateKey = this.generateKey.bind(this);
    }

    generateKey(){
        let currentKey = this.state.key;
        let lastIndex = currentKey.charCodeAt(33);
        lastIndex++;
        lastIndex = String.fromCharCode(lastIndex);
        currentKey = currentKey.substring(0, 33) + lastIndex;
        this.setState({key: currentKey.toString()});
    }

    render(){
        return (
            <div>
                <h1>Random Key Generator</h1>
                <p>{this.state.key}</p>
                <button onClick={this.generateKey}>Generate Key</button>
            </div>
        );
    }

}