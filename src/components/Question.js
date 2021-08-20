import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  // ************* state values *******************
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus className="minus" /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
      {/* {showInfo ? <p>{info}</p> : null} */}
    </article>
  );
};

export default Question;
