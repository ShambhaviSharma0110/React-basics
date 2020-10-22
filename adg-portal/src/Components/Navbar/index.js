import React, { Component } from 'react';
import './index.css';


 class index extends Component {
    render() {
        return (
            <div className = "div">
                <ul>
                    <li><a href= "#home">Home</a></li>
                    <li><a href= "#Contests">Contests</a></li>
                    <li><a href= "#Profile">Profile</a></li>
                    <li><a href= "#Logout">Logout</a></li>
                </ul>
            </div>
        )
    }
}

export default index
