// Conditional:

const Six = () => {
  const list = ["A", "B", "C"];

  // const numbers = [1, 2, 3];
  const numbers = []; //

  return (
    <div className="four center">
      <h1> Component Six</h1>
      <ul>
        {list.length > 0 && list.map((item) => <li key={item}>{item} </li>)}
      </ul>
      <ul>
        {numbers.length > 0 ? (
          numbers.map((num) => <li key={num}>{num} </li>)
        ) : (
          <h2>No items in the list</h2>
        )}
      </ul>
    </div>
  );
};
export default Six;
