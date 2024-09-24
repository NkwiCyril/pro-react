import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.keepCounting = this.keepCounting.bind(this);
    this.pause = this.pause.bind(this);
  }

  keepCounting() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.keepCounting}>Start</button>
      </div>
    );
  }
}

export default Counter;
