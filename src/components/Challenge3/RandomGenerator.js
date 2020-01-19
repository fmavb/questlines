import React, {Component} from 'react';

export default class RandomGenerator extends Component{
    constructor(props){
        super(props);
        this.keys = ['0x743777217A25432646294A404E635266', '0x597133743677397A244326452948404D',
        '0x67566B59703373367639792442264528', '0x4E645267556B58703273357638792F42', '0x294A404E635266556A586E3272357538'];
        this.state = {key: this.keys[0]};
        this.generateKey = this.generateKey.bind(this);
        this.keyChoice = 0;
    }

    generateKey(){
        this.keyChoice = this.keyChoice > 3 ? 0 : this.keyChoice+=1;
        this.setState({key: this.keys[this.keyChoice]});
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