import React from "react";
import Counter from "./Counter";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubscribed: false,
      text: "Subscribe",
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // never modify state directly

  handleChange() {
    this.setState((prevState) => ({
      isSubscribed: !prevState.isSubscribed, // negate the previous state of isSubscribed once the button is clicked
      text: prevState.isSubscribed ? "Subscribe" : "Unsubscribe", // change button inner text if subscribed or unsubscribed
    }));
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    if (!this.state.isSubscribed) {
      return (
        <div>
          <Counter count={this.state.count} />
          <h2>A subscription will be of great help to me</h2>
          <button onClick={this.handleChange}>{this.state.text}</button>
          <button type="button" onClick={this.increment}>
            Greet me again!
          </button>
          <button type="button" onClick={this.decrement}>
            Don't greet
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Thank you for your subscription!!</h1>
          <h2>There are a lot of videos in store for you.</h2>
          <button onClick={this.handleChange}>{this.state.text}</button>
        </div>
      );
    }
  }
}

export default Message;
