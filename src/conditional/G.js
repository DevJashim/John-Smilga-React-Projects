// Conditional:

import { useState } from "react";

const Seven = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pic = "https://picsum.photos/100";

  // Toggle Visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  //  Can use as variable 
  const album = isVisible ? (<img src={pic} alt="sample" />) : (<h2>Image hidden</h2>);
  
  // set button text
  const buttonText = isVisible ? "hide" : "show";

  return (
    <div className="three center">
      <h1>Component Seven</h1>
      {isVisible ? <img src={pic} alt="sample" /> : <h2>I'm hidden</h2>}
      {/* Can use as variable */}
      {album}
      <button onClick={toggleVisibility}>{buttonText} </button>
    </div>
  );
};
export default Seven;


/*
// is statement
if(!isVisible){return <h2>Display nothing</h2>}

*/