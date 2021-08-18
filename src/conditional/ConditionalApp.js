import React from "react";
import One from "./A";
import Two from "./B";
import Three from "./C";
import Four from "./D";
import Five from "./E";
import Six from "./F";
import Seven from "./G";
import ToggleClass from "./ToggleClass";
import Toggle from "./Toggle";

const ConditionalApp = () => {
  return (
    <>
      <h1 className="center ">Conditional Render</h1>
      <div className="components">
        <One />
        <Two />
      </div>
      <div className="components">
        <Three />
        <Four />
      </div>
      <div className="components">
        <Five />
        <Six />
      </div>
      <div className="components">
        <Seven />
      </div>
      <div className="components">
        <ToggleClass />
        <Toggle />;
      </div>
    </>
  );
};

export default ConditionalApp;
