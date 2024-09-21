import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      };
      this.login = this.login.bind(this);
    }

    login() {
        console.log('I have been clicked')
        this.setState({ isLoggedIn: true });
    }

  render() {

    

    return (  
      <div>
        
      </div>
    )
  }
}

export default UserGreeting
