// Conditional Rendering

import React, { useState } from "react";

// 0. Conditional render variable

const name = "Paris Tour";
const info =
  "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles!";

// 1. Conditional render object
const objects = [
  { id: 1, name: "John" },
  { id: 2, name: "David" },
];

// 2.Array
// const arrays = ["red", "gree", "blue"];
const arrays = [];
// 2. Other way Conditional render Array as List
const renderArray = () => {
  if (arrays.length === 0)
    return <h3 style={{ color: "red" }}>No items in the list.</h3>;
  return (
    <ul>
      {arrays.map((list) => (
        <li key={list}> {list}</li>
      ))}
    </ul>
  );
};

const Two = () => {
  // ************* state values *******************
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="two">
      <h1>B</h1>
      <div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
      {/* 2. Other way Conditional Render Array as List */}
      <h2>Iterate Array </h2>
      {renderArray()}
      {/*  1. Conditional render object */}
      <h2>Iterate Object </h2>
      {objects.length === 0 && (
        <h3 style={{ color: "red" }}>No items in the list.</h3>
      )}
      <ul>
        {objects.map((list) => (
          <h4 key={list.id}>{list.name}</h4>
        ))}
      </ul>
    </div>
  );
};

export default Two;

/*
  // conditional render
  const renderList = () => {
    if (array.length === 0) return <p>There are no Items in the list.</p>;
    return <ul> {array.map((list) => (<li key={list}> {list}</li> ))} </ul>;
    };
    
*/
