import React, { Component } from 'react';
import './Decryptor.css';

export default class Decryptor extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.selectKey = this.selectKey.bind(this);
        this.state = {file: 'patient1', key: 'key1'};
        this.decrypt = this.decrypt.bind(this);
    }

    selectFile(e){
        this.setState({file: e.target.value});
    }

    selectKey(e){
        this.setState({key: e.target.value});
    }

    decrypt(){
        if (this.state.file === "patient2" && this.state.key === "key1"){
            this.props.file();
            alert("File decrypted!");
        } else {
            alert("Corrupt file!");
        }
    }

    render() {
        return (<div>
            <h3>Decryptor</h3>
            <div>
                <div className="dropdown">
                    <label>Please choose a file:</label>
                    <select onChange={this.selectFile}>
                        <option value="patient1">patient1/record_encrypted</option>
                        <option value="patient2">patient2/record_encrypted</option>
                    </select>
                </div>
                <div className="dropdown">
                    <label>Please choose a key to try:</label>
                    <select onChange={this.selectKey}>
                        <option value="key1">0x67566B597033733676397924423F4528</option>
                        <option value="key2">0x4E645267556B58703273357638792F42</option>
                        <option value="key3">0x294A404E635266556A586E3272357538</option>
                        <option value="key4">0x4226452948404D635166546A576E5A72</option>
                    </select>
                </div>
                <button onClick={this.decrypt}>Decrypt</button>
            </div>
        </div>);
    }
}