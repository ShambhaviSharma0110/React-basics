import React, { Component } from 'react';
import './index.css';

 class index extends Component {
    render() {
        return (
            <div className= "contest">
                <h1>Contests</h1>
                <ul>
                <h3>Difficulty</h3>
                <input type = "radio" value = "difficulty" />Easy
                <input type = "radio" value = "difficulty"/>Medium
                <input type = "radio" value = "difficulty"/>Hard

                </ul>
               
            </div>
        )
    }
}

export default index
