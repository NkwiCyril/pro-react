import React from "react";

class EventClass extends React.Component {
  
  constructor() {
    super();

    this.state = {
      name: '',
      disabled: false
    }
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {    
    this.setState({
      name: e.target.value,
      disabled: true
    });
  }
  render() {
    return (
      <div>
        <form action="#" >
          <input type="text" placeholder="Enter your name" onChange={() => this.textChange(e)}/>
          <button type="submit">Submit</button>
        </form>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default EventClass;
