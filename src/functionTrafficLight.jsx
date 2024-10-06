import React, { useState } from "react";

const FunctionalTrafficLight = () => {
  const [light, setLight] = useState("red");

  const nextState = () => {
    if (light === "red") {
      setLight("yellow");
    } else if (light === "yellow") {
      setLight("green");
    } else {
      setLight("red");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "50px" }}>
        {light === "red" && <div style={{ color: "red" }}>🔴</div>}
        {light === "yellow" && <div style={{ color: "yellow" }}>🟡</div>}
        {light === "green" && <div style={{ color: "green" }}>🟢</div>}
      </div>
      <button onClick={nextState}>Next State</button>
    </div>
  );
};

export default FunctionalTrafficLight;
