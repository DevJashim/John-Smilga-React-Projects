// Conditional:
//1. combination of "&&" and "||"
//2. TERNARY OPERATOR: condition ? হ্যা : না

import React, { useState } from "react";

const Four = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  };

  return (
    <div className="four center">
      <h1> D</h1>
      {(state && <h1>না </h1>) || <h1>হ্যা </h1>}
      {state ? <h1>হ্যা</h1> : <h1>না </h1>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
export default Four;
