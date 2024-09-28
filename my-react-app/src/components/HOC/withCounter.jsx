import React from "react";

const UpdatedComponent = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          count={count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }

  return WithCounter;
};
