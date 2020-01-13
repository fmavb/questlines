import React, {Component} from 'react';

export default class RandomGenerator extends Component{
    constructor(props){
        super(props);
        this.startKey = "dfdfjdksdfda";
        this.state = {key: this.startKey};
        this.generateKey = this.generateKey.bind(this);
    }

    generateKey(){
        let currentKey = this.state.key;
        let lastIndex = currentKey.charCodeAt(11);
        lastIndex++;
        lastIndex = String.fromCharCode(lastIndex);
        currentKey = currentKey.substring(0, 11) + lastIndex;
        this.setState({key: currentKey});
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