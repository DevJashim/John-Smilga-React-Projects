// Conditional Rendering
import React, { useState } from "react";

const One = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = { name: "John Doe" };

  // Toggle login
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="one">
      <h1> A</h1>
      {/* 1.conditional render using TERNARY OPERATOR*/}
      {isLoggedIn ? <h2>Welcome {user.name} </h2> : <h2>Please Signup Guest </h2>}

      {/* Toggle login*/}
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"} </button>

    
    </div>
  );
};

export default One;

/*
 // 2. Conditional Render using Conditional Statement if else
  const message = () => {
    if (isLoggedIn) {
      return <h2> Welcome {user.name}</h2>;
    } else {
      return <h2> Welcome Guest</h2>;
    }
  };


    // {2. Conditional Render using Conditional Statement if else }
      // {message()}
 */