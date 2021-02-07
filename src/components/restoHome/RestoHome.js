import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaClock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../utils/loader";
import axios from "axios";
const RestoHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restaurant-menu-apis.herokuapp.com/api/restaurant")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const serachContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serachContainer.current.value);
    const search = serachContainer.current.value;
    axios
      .get("http://localhost:8080/api/searchRestaurant", {
        params: {
          search: search,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home__header">Restaurants</div>
      <div className="home__underline"></div>
      <div className="home__searchbar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search..."
            ref={serachContainer}
          ></input>
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="home__items">
        {data &&
          data.map((data) => {
            const { _id, name, ratings, img, open, close, location } = data;
            console.log(_id);
            return (
              <div
                key={_id}
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
                      pathname: `/menu/${_id}`,
                      state: { restoId: { _id } },
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
