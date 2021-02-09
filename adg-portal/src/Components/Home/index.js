import React, { Component } from 'react';
import './index.css'

 class index extends Component {
    render() {
        return (
            <div className = "home">
                <h1 id= "top">Welcome to the ADG Coding Portal!</h1>
                <div className = "card1">
                    <a href = "cpp"><h1>C++</h1></a>
                </div>
                <div className = "card2">
                <a href = "ps"><h1>Problems</h1></a>
                </div>
                <div className = "card3">
                <a href = "js"><h1>Javascript</h1></a>
                </div>
                <div className = "card4">
                <a href = "java"><h1>Java</h1></a>
                </div>
                <div className = "points">
                    <h3>Points:100</h3>
                    <a href="msp"><h4>Most Solved Problems:</h4></a>
                    <a href="msp"><h4>Recently Solved Problems:</h4></a>
                     </div>
            </div>
            
        )
    }
}

export default index
