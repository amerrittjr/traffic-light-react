import React, { Component } from "react";

class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = { light: "red" };
  }

  nextState = () => {
    this.setState((prevState) => {
      let nextLight;
      switch (prevState.light) {
        case "red":
          nextLight = "yellow";
          break;
        case "yellow":
          nextLight = "green";
          break;
        case "green":
          nextLight = "red";
          break;
        default:
          nextLight = "red";
      }
      return { light: nextLight };
    });
  };
  render() {
    const { light } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "50px" }}>
          {light === "red" && <div style={{ color: "red" }}>🔴</div>}
          {light === "yellow" && <div style={{ color: "yellow" }}>🟡</div>}
          {light === "green" && <div style={{ color: "green" }}>🟢</div>}
        </div>
        <button onClick={this.nextState}>Next State</button>
      </div>
    );
  }
}

export default ClassTrafficLight;
