import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Contests from './Contests';
//import Profile from './Profile';


 class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Home/>
                
                <Footer/>
            </div>
        )
    }
}

export default App

