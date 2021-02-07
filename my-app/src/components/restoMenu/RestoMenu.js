import React, { useState, useEffect } from "react";
import items from "./menuData.js";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestoMenu = () => {
  let { id } = useParams();
  const [menudata, setMenudata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterData, setFilterdata] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restaurant-menu-apis.herokuapp.com/api/menu/${id}`)
      .then((res) => {
        const items = res.data;
        const filterData = items.filter((item) => item.rid == id);
        console.log(res.data);
        const allCategories = [
          "all",
          ...new Set(filterData.map((item) => item.category)),
        ];
        setMenudata(res.data);
        setCategories(allCategories);
        setFilterdata(filterData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filtermenudata = (category) => {
    console.log(filterData, category);
    if (category == "all") {
      setMenudata(filterData);
      return;
    }
    const newmenudata = filterData.filter((item) => item.category == category);
    setMenudata(newmenudata);
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
