import React from "react";
import FunctionalTrafficLight from "./functionTrafficLight";
import ClassTrafficLight from "./classTraficLight";
const App = () => {
  return (
    <div style={{ color: "grey" }}>
      <h1>Functional Traffic Light</h1>
      <FunctionalTrafficLight />
      <h1>Class Traffic Light</h1>
      <ClassTrafficLight />
    </div>
  );
};

export default App;
