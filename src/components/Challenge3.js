import React, { Component } from 'react';
import FileBrowser from 'react-keyed-file-browser';
import '../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css';
import "./Challenge3.css";
import Patient1 from './Challenge3/Patient1';
import Patient2 from './Challenge3/Patient2';
import RandomGenerator from './Challenge3/RandomGenerator';
import MCQ from './Challenge3/MCQ';
import Decryptor from './Challenge3/Decryptor';

export default class Challenge3 extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.id = this.id.bind(this);
        this.closeViewer = this.closeViewer.bind(this);
        this.processFile = this.processFile.bind(this);
        this.addPoints = this.addPoints.bind(this);
        this.patient2 = this.patient2.bind(this);
        this.filesToBeFound = ['patient1/record.docx', 'random_key_generator', 'patient2/record.docx'];
        document.title = "Challenge 3";
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
                    key: 'patient2/key.txt',
                    size: 1024,
                },
                {
                    key: 'random_key_generator',
                    size: 1.5 * 1024 * 1024,
                },
                {
                    key: 'decryptor',
                    size: 1.5 * 1024 * 1024,
                }
            ],
            fileName: "",
            fileViewer: null,
            fileOpen: false,
            found: 0,
            solution: [],
            points: 0,
        };
    }
    selectFile(e) {
        console.log(e);
        this.id('file').style.display = 'block';
        this.id('page').style.opacity = 0.1;
        this.id('page').style.pointerEvents = 'none';
        let viewFile;
        let fileName = e.key;
        if (e.key === "patient1/record.docx") {
            viewFile = <Patient1 />;
        } else if (e.key === "patient1/record_encrypted") {
            viewFile = <h3>Cannot read file</h3>;
        } else if (e.key === "patient2/record_encrypted") {
            viewFile = <h3>Cannot read file</h3>;
        } else if (e.key === "random_key_generator") {
            viewFile = <RandomGenerator />;
        } else if (e.key === "decryptor"){
            viewFile = <Decryptor file={this.patient2}/>;
        } else if (e.key === 'patient2/key.txt'){
            viewFile = <div className="key">
                <p>0x67566B597033733676397924423F4528</p>
            </div>
        } else if (e.key === 'patient2/record.docx'){
            viewFile = <Patient2 />;
        }
        this.setState({ fileViewer: viewFile, fileName: fileName });
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

    processFile() {
        if (this.filesToBeFound.includes(this.state.fileName)) {
            this.setState({ mcq: <MCQ id="mcqComponent" question={this.state.fileName} close={this.closeViewer} points={this.addPoints} /> });
            const msq = this.id('mcq');
            msq.style.display = "block";
            this.id('file').style.display = 'block';
            this.id('file').style.opacity = 0.1;
            this.id('file').style.pointerEvents = 'none';
            let solution = this.state.solution;
            solution.push(this.state.fileName);
            let newFiles = [];
            for (let i = 0; i < this.filesToBeFound.length; i++) {
                if (this.filesToBeFound[i] !== this.state.fileName) {
                    newFiles.push(this.filesToBeFound[i]);
                }
            }
            this.filesToBeFound = newFiles;
            let found = this.state.found;
            this.setState({ solution: solution, found: found + 1 });
        }
    }

    addPoints(points) {
        let currentPoints = this.state.points;
        this.setState({ points: currentPoints + points });
    }

    patient2(){
        let files = this.state.files;
        files.push({key: 'patient2/record.docx', size: 1.5*1024*1024});
        this.setState({files:files});
    }

    componentDidMount() {
        this.id("file").style.display = "none";
    }

    render() {
        return (
            <div>
                <h1>Challenge 3</h1>
                Find 4 files that show that the company has been using poor cryptography practices.
                <div>
                    <div className="page" id="page">
                        <div className="browser">
                            <FileBrowser
                                files={this.state.files}
                                onSelectFile={this.selectFile}
                                detailRenderer={()=>""}
                            />
                        </div>
                        <div className="dropzone">
                            <h1>Incriminating files</h1>
                            <h3>{this.state.found} out of 4 files found</h3>
                            <h3>{this.state.points} points</h3>
                            <ul>
                                {this.state.solution.map((el, idx) => {
                                    return (<li>{el}</li>);
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="fileViewer" id="file">
                        {this.state.fileName}
                        {this.state.fileViewer}
                        <button onClick={this.processFile}>Add to list</button>
                        <button onClick={this.closeViewer}>Close</button>
                    </div>
                </div>
                <div className="fileViewer" id="mcq">
                    {this.state.mcq}
                </div>
            </div>
        );
    }

}