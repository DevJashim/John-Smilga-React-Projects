import React, { useState } from "react";

const HookToggleSwitch = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="four center">
      <h1>Hook Toggle Switch</h1>
      <div onClick={handleClick} className="ToggleSwitch">
        <div className={isToggleOn ? "knob active" : "knob"} />
        {isToggleOn ? "Now it's on" : "Now it's of"}
      </div>
      <br />
      <div onClick={handleClick} className="batonSwitch">
        <div className={isToggleOn ? "baton active" : "baton"} />
        {isToggleOn ? "খোলা" : "বন্ধ"}
      </div>
    </div>
  );
};

export default HookToggleSwitch;
