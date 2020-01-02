import React, { Component } from 'react';
import FileBrowser, { FileRenderers, FolderRenderers, Groupers, Icons } from 'react-keyed-file-browser';
import '../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css';
import "./Challenge3.css";

export default class Challenge3 extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.state = {files: [
            {
                key: 'patient1/record_encrypted',
                size: 1.5 * 1024 * 1024,
            },
            {
                key: 'patient1/record.txt',
                size: 1.5 * 1024 * 1024
            }
        ]};
    }
    selectFile(e){
        console.log(e);
    }
    render() {
        return (
            <div className="page">
                <div className="browser">
                <FileBrowser
                    icons={Icons.FontAwesome(4)}
                    files={this.state.files}
                    onSelectFile={this.selectFile}
                />
                </div>
                <div className="dropzone">

                </div>
            </div>
        );
    }

}