import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";

//Add Dynamic Menu : ***** Detail: See in the bottom*******
// To see the Dynamic Menu, add new item & category in the data
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const MenuApp = () => {
  // ************* state values *******************
  const [menus, setMenus] = useState(data);

  // const [categories, setCategories] = useState([]);
  // const [categories, setCategories] = useState(allCategories);
  const categories = allCategories;

  // ************* functionality *******************
  const filterCategory = (category) => {
    if (category === "all") {
      setMenus(data);
      return;
    }
    const filterItems = data.filter((item) => item.category === category);
    setMenus(filterItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterCategory={filterCategory} categories={categories} />
        <div className="section-center">
          {menus.map((item) => (
            <Menu key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenuApp;

/*
// Detail:
// How to add dynamic menu? which are in 'data' as 'category'
// 1. first we look all categories (categories are repeat)
const allCategories = data.map((item) => item.category);
console.log(allCategories);//(9) ["breakfast", "lunch", "shakes", "breakfast", "lunch", "shakes", "breakfast", "lunch", "shakes"]

//2. For Menu we need unique value:
const uniqueCategory = new Set(data.map((item) => item.category));
console.log(uniqueCategory);//Set(3) {"breakfast", "lunch", "shakes"}

// 3. But we also need 'All' as in Menu  (use spread & rest operator)
const itemCatagories = ["all", ...new Set(data.map((item) => item.category))];
console.log(itemCatagories); //(4) ["all", "breakfast", "lunch", "shakes"]


*/
