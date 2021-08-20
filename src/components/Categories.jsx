const Categories = ({ filterCategory, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

/*
// Manually added button
<div className="btn-container">
      <button className="filter-btn" onClick={() => filterCategory("all")}>all</button>
      <button className="filter-btn" onClick={() => filterCategory("breakfast")} > breakfast </button>
    </div>

*/
