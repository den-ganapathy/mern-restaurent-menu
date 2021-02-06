import React from "react";
import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeData from "./homeData";
const RestoHome = () => {
  return (
    <div className="home">
      <div className="home__header">Restaurants</div>
      <div className="home__underline"></div>
      <div className="home__items">
        {homeData.map((data) => {
          const { id, name, ratings, img, open, close, location } = data;
          return (
            <div
              key={id}
              className="home__items__container"
              onClick={() => console.log("clicked")}
            >
              <img src={img}></img>
              <div className="home__items__container--title">
                <div className="home__items__container--title--name">
                  {name}
                </div>
                <div className="home__items__container--title--star">
                  <p>
                    <FaStar />
                  </p>
                  {ratings}
                </div>
              </div>
              <div className="home__items__container--location">
                <p>
                  <FaMapMarkerAlt />
                </p>
                {location}
              </div>
              <div className="home__items__container--timings">
                <div className="home__items__container--timings--open">
                  <p>
                    <FaClock />
                  </p>{" "}
                  Opens at : {open}:00
                </div>
                <div className="home__items__container--timings--close">
                  <p>
                    <FaClock />{" "}
                  </p>
                  Closes at : {close}:00
                </div>
              </div>{" "}
              <div className="home__items__container--btn">
                <Link
                  to={{
                    pathname: `/menu/${id}`,
                    state: { restoId: { id } },
                  }}
                >
                  <button>View Menu</button>
                </Link>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoHome;
