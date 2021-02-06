import React, { useState } from "react";
import items from "./menuData.js";
import { useParams } from "react-router-dom";

const RestoMenu = () => {
  let { id } = useParams();
  const filterData = items.filter((item) => item.fid == id);

  const allCategories = [
    "all",
    ...new Set(filterData.map((item) => item.category)),
  ];
  const [menudata, setMenumenudata] = useState(filterData);
  const [categories, setCategories] = useState(allCategories);
  const filtermenudata = (category) => {
    if (category == "all") {
      setMenumenudata(filterData);
      return;
    }
    const newmenudata = filterData.filter((item) => item.category == category);
    setMenumenudata(newmenudata);
  };
  return (
    <div className="menu">
      <h1 className="menu__header">Menu</h1>
      <div className="menu__underline"></div>
      <div className="menu__items">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="menu__items--btn"
              key={index}
              onClick={() => filtermenudata(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="menu__containers">
        {menudata.map((data) => {
          const { id, img, title, price, desc, fid } = data;
          return (
            <div key={id} className="menu__containers--item">
              <img
                src={img}
                alt={title}
                className="menu__containers--item--img"
              />
              <div className="menu__containers--item--info">
                <header>
                  <h4>{title}</h4>
                  <p>₹ {price}</p>
                </header>
                <p className="menu__containers--item--info--desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoMenu;
