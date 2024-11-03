import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
  }

//   method to login user
  login() {
    console.log("I have been clicked");
    this.setState({ isLoggedIn: true });
  }

  render() {
    let message = this.state.isLoggedIn ? (
      <h1>Logged in successfully!</h1>
    ) : (   
      <h1>Welcome to our platform! Please login to continue</h1>
    );

    return <div>
        {message}
        <button type="button" onClick={this.login}>Log me</button>
    </div>;
  }
}

export default UserGreeting;
