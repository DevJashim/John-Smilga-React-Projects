// Conditional:

const Five = () => {
  // Long version
  let yayOrNay;
  if (3 < 1) {
    yayOrNay = "হ্যা";
  } else {
    yayOrNay = "না";
  }
  // short-hand version
  const yesOrNo = 3 > 1 ? "হ্যা" : "না";

  return (
    <div className="four center">
      <h1> E</h1>
      <h1>{yesOrNo}</h1>
      <h1>{yayOrNay}</h1>
    </div>
  );
};
export default Five;
