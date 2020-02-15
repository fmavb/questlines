import React, {Component} from 'react';

export default class Part1Explanation extends Component{

    constructor(props){
        super(props);
        document.title = "Challenge 2 - Part 1 - Explanation";
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
    }

    back(){
        this.props.history.push("/challenge2/part1");
    }

    next(){
        this.props.history.push("/challenge2/part2/start");
    }

    render(){
        return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" 
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"></link>
            <h1>Sign In / Sign Up: Explanation</h1>
            <div className="container">
                In this challenge, you are asked to graphically represent how an application would perform sign in and sign up.
                Since storing passwords in plaintext is a very bad idea, we need to find a way to store them securely,
                and to have at the same something to check the password with when the user tries to log in.
                <br />
                <br />
                This is where hash functions come in to play.
                Hash functions take a string and output a unique string of fixed size called a hash 
                that does not look like the original string that was provided.
                Hashes have two important characteristics: it is not realistic to find an input that would produce a given output,
                and it is not practical to find two inputs that would have the same hashes.
                <br />
                <br />
                The challenge gives you a choice between three hashing algorithms. 
                That does not mean that these are the only ones out there.
                You'll have a quick overview below:
                <ul>
                    <li>MD5: MD5 is probably the most famous one. However, it is no longer considered safe today</li>
                    <li>SHA-2: SHA-2 is the currently used hash function for most purposes. It has different variants
                        which generate hashes of different lengths.
                    </li>
                    <li>bcrypt: bcrypt is a hash function that was designed for passwords. It is a slow function to prevent 
                        brute forcing (trying every possibility)</li>
                </ul>
                <br />
                Another thing to keep in mind: a given string will always have the same hash. This means that identical passwords
                will have the same hash. Therefore, this gives some information to the attacker about the passwords. 
                A solution is to add a unique string to the password called "salt". 
                A salt is random string added to the password so that the hashes do not look the same.
                <br />
                <br />
                Hash functions are not only used for password validation, they are also used to check file integrity, and message integrity.
                <br />
                <br />
                <b>DISCLAIMER:</b> You should avoid making your own hash functions at all cost. 
                People before you have tried and failed!
                <div id="buttons">
                    <button onClick={this.back} style={{margin: "25px"}}>Retry the previous challenge</button>
                    <button onClick={this.next} style={{margin: "25px"}}>Next challenge</button>
                </div>
            </div>
        </div>);
    }
}