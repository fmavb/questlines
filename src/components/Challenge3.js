import React, { Component } from 'react';
import FileBrowser, { FileRenderers, FolderRenderers, Groupers, Icons } from 'react-keyed-file-browser';
import '../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css';
import "./Challenge3.css";
import Patient1 from './Challenge3/Patient1';
import RandomGenerator from './Challenge3/RandomGenerator';

export default class Challenge3 extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.id = this.id.bind(this);
        this.closeViewer = this.closeViewer.bind(this);
        this.state = {
            files: [
                {
                    key: 'patient1/record_encrypted',
                    size: 1.5 * 1024 * 1024,
                },
                {
                    key: 'patient1/record.docx',
                    size: 1.5 * 1024 * 1024,
                },
                {
                    key: 'patient2/record_encrypted',
                    size: 1.5 * 1024 * 1024,
                },
                {
                    key: 'random_key_generator',
                    size: 1.5 * 1024 * 1024,
                }
            ],
            fileName: "",
            fileViewer: null,
            fileOpen: false
        };
    }
    selectFile(e) {
        console.log(e);
        this.id('file').style.display = 'block';
        this.id('page').style.opacity = 0.1;
        this.id('page').style.pointerEvents = 'none';
        let viewFile;
        let fileName = e.key;
        if (e.key === "patient1/record.docx"){
            viewFile = <Patient1></Patient1>;
        } else if (e.key === "patient1/record_encrypted"){
            viewFile = <h3>File encrypted</h3>;
        } else if (e.key === "patient2/record_encrypted"){
            viewFile = <h3>File encrypted</h3>;
        } else if (e.key === "random_key_generator"){
            viewFile = <RandomGenerator />
        }
        this.setState({fileViewer: viewFile, fileName: fileName});
    }

    id(id) {
        return document.getElementById(id);
    }

    closeViewer(e) {
        this.id('file').style.display = 'none';
        this.id('page').style.opacity = 1;
        this.id('page').style.pointerEvents = 'auto';
        this.setState({ fileOpen: false });
    }

    componentDidMount() {
        this.id("file").style.display = "none";
    }

    render() {
        return (
            <div>
                <h1>Challenge 3</h1>
                <div className="page" id="page">
                    <div className="browser">
                        <FileBrowser
                            icons={Icons.FontAwesome(4)}
                            files={this.state.files}
                            onSelectFile={this.selectFile}
                        />
                    </div>
                    <div className="dropzone">
                        <h1>Incriminating files</h1>
                        <ul>
                            <li>List1</li>
                        </ul>
                    </div>
                </div>
                <div className="fileViewer" id="file">
                    {this.state.fileName}
                    {this.state.fileViewer}
                    <button>Add to list</button>
                    <button onClick={this.closeViewer}>Close</button>
                </div>
            </div>
        );
    }

}