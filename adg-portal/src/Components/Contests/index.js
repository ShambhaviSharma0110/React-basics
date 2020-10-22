import React, { Component } from 'react';
import './index.css';

 class index extends Component {
    render() {
        return (
            <div>
                <h1>Contests</h1>
                <ul>
                <h3>Difficulty</h3>
                <input type = "radio" value = "difficulty">Easy</input>
                <input type = "radio" value = "difficulty">Medium</input>
                <input type = "radio" value = "difficulty">Hard</input>
                </ul>
               
            </div>
        )
    }
}

export default index
