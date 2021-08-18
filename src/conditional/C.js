import React, { useState, useEffect } from "react";

const Three = () => {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState("bn-BD");
  const toggleLocale = () => {
    setLocale(locale === "bn-BD" ? "en-US" : "bn-BD");
  };

  useEffect(() => {
    console.log("Use Effect");
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div className="three">
      <h1> Component Three</h1>
      <h2>{date.toLocaleTimeString(locale)}</h2>
      <h2>{date.toLocaleDateString(locale)}</h2>
      <button onClick={toggleLocale}>
        {locale === "bn-BD" ? "বদলান" : "Change"}
      </button>
    </div>
  );
};

export default Three;

/*
  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
    };
  }, []);
    
  const tick = () => {
    setDate(new Date());
  };
 */
