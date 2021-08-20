import React from "react";

const Menu = ({ id, title, img, info, price }) => {
  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{info}</p>
      </div>
    </article>
  );
};

export default Menu;

/*
1. If 'map' this child component
*****************************
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, info, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};


2. If 'map' from parent component
******************************
const Menu = ({ id, title, img, info, price }) => {
  return (
    <article key={id} className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{info}</p>
      </div>
    </article>
  );
};

*/
