import React, {Component} from 'react';
import './MCQ.css';

export default class MCQ extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.id = this.id.bind(this);
        this.select = this.select.bind(this);
        this.validate = this.validate.bind(this);
        this.points = 25;
        this.questions = {
            'patient1/record.docx' : <div className="mcq">
                <div className="answer" id="answer1" onClick={this.select}>The plaintext contains sensitive information</div>
                <div className="answer" id="answer2" onClick={this.select}>The algorithm used is outdated</div>
                <div className="answer" id="answer3" onClick={this.select}>The plaintext was not deleted after encryption</div>
                <div className="answer" id="answer4" onClick={this.select}>I don't know</div>
            </div>,
            'random_key_generator': <div>
                <div className="answer" id="answer1" onClick={this.select}>The plaintext contains sensitive information</div>
                <div className="answer" id="answer2" onClick={this.select}>The generator does not generate numbers randomly</div>
                <div className="answer" id="answer3" onClick={this.select}></div>
                <div className="answer" id="answer4" onClick={this.select}>I don't know</div>
            </div>,
        };
        this.state = {currentQuestion: this.props.question};
        this.state = {questions: this.questions[this.props.question], selected: ""};
        this.answer = {
            'patient1/record.docx': "answer3",
            random_key_generator: "answer2",
        };
    }

    id(id){
        return document.getElementById(id);
    }

    select(e){
        if (this.state.selected === "") {
            const element = this.id(e.target.id);
            element.style.backgroundColor = 'turquoise';
            this.setState({selected: e.target.id});
        } else {
            const previous = this.id(this.state.selected);
            previous.style.backgroundColor = "white";
            const element = this.id(e.target.id);
            element.style.backgroundColor = 'turquoise';
            this.setState({selected: e.target.id});
        }
    }


    validate(e){
        if (this.state.selected === this.answer[this.props.question]){
            alert("Correct!");
            this.props.points(this.points);
            const element = this.id("mcq");
            element.style.display = "none";
            this.id('file').style.opacity = 1;
            this.id('file').style.pointerEvents = 'auto';
            this.props.close();
        } else {
            this.points -= 5;
            alert("Incorrect!");
        }
        this.setState({selected: ""});
    }


    render(){
        return (
            <div>
                <h3>Why did you select this file?</h3>
                {this.state.questions}
                <button onClick={this.validate}>Submit</button>
            </div>
        );
    }
}