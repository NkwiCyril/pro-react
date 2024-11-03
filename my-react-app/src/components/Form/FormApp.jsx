import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

class FormApp extends Component {
  constructor() {
    super();

    this.state = {
        username: '',
        email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="">
        <form action="#">
          <Input
            label={"Username: "}
            placeholder={"Enter a username"}
            name={"username"}
            type={"text"}
            handleChange={(event) => this.handleChange(event)}
          />
          <Input
            label={"Email: "}
            placeholder={"Enter your email address"}
            name={"email"}
            type={"email"}
            handleChange={(event) => this.handleChange(event)}
          />
          <Button type={"submit"} name={"Login"}/>
        </form>
        <h1>{this.state.username}</h1>
        <h1>{this.state.email}</h1>
      </div>
    );
  }
}

export default FormApp;

// condition approaches
// => ifelse
// => ternary operator
// => short circuit op
// create a counter that when a button is clicked, the number starts counting AUTOMATICALLY