// Conditional Rendering

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
  return (
    <div className="two">
      <h1>Component Two</h1>
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
