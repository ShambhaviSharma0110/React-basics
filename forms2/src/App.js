import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Route, Switch,Link} from "react-router-dom";
import Error from "./Login/Error";
import Login from "./Login/Login";
import Signup from "./Signup";


const routes =(
  <BrowserRouter>
  <div> 
  <Switch>  
  <Route exact path ="/" component={Signup} />
  <Route path ="/login" component={Login} />   
  <Route path ="/error" component={Error} />              
  </Switch>
  </div>
  </BrowserRouter>
);

function App() {
  return (
    <div>
      <Signup/>
    </div>
  )
}

export default App

