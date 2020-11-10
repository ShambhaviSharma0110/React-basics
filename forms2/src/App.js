import React, { Component } from "react";
import "./App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  async postData()
  {
    try{
      let res= await fetch('',
      {
        method:'Post',
        mode:'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(
          {
            "name":"Sanjay",
            "username":"sun123",
            "email":"sanjay@gmail.com",
            "password":"hi@12", 
            "bio":"Hi!, I'm a coder!",          
            "adgMember":true            
          })
        });
        console.log(res)
      } 
    catch(e){
      console.log(e)
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      userName: null,
      email: null,
      password: null,
      bio:null,
      adgm:null,
      formErrors: {
        firstName: "",
        userName: "",
        email: "",
        password: "",
        bio:"",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Username: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        Bio: ${this.state.bio}
        Adgm: ${this.state.adgm}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
      case "bio":
        formErrors.password =
          value.length < 50 ? "minimum 50 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          
          <h3>Welcome to ADG Coding Portal!</h3>
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="userName">
              <label htmlFor="userName">Username</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length > 0 && (
                <span className="errorMessage">{formErrors.userName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="bio">
              <label htmlFor="bio">Bio</label>
              <input
                className={formErrors.bio.length > 0 ? "error" : null}
                placeholder="Bio"
                type="text"
                name="bio"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.bio.length > 0 && (
                <span className="errorMessage">{formErrors.bio}</span>
              )}
            </div>
            <div className="adm">
              <label htmlFor="adgm">Adg Member</label>
              <input
                type="checkbox"
                name="checkbox"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit" onClick = { () => this.postData()}>Create Account</button>
              <a href= "#">Already have an account?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
