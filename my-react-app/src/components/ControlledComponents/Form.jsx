import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      aboutMe: "",
      topic: "react"
    };
  }


  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleAboutMeChange = (event) => {
    this.setState({ aboutMe: event.target.value });
  };

  handleTopicChange = (event) => {
    this.setState({
        topic: event.target.value
  
    });
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} => ${this.state.aboutMe} => ${this.state.topic}`)
    event.preventDefault();
  }

  render() {

    const {username, aboutMe, topic} = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>About Me</label>
          <textarea
            name="aboutMe"
            onChange={this.handleAboutMeChange}
            value={aboutMe}
          ></textarea>
        </div>
        <div>
            <select name="topic" value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
