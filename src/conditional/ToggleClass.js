import React, { Component } from "react";

// Toggle Switch

class ClassToggleSwitch extends Component {
  state = { isToggleOn: false };

  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
      <div className="four center">
        <h1>Class Toggle Switch</h1>
        <div onClick={this.handleClick} className="ToggleSwitch">
          <div className={this.state.isToggleOn ? "knob active" : "knob"} />
          {this.state.isToggleOn ? "now it's on" : "now it's off"}
        </div>
      </div>
    );
  }
}

export default ClassToggleSwitch;
