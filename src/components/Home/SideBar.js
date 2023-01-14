/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";

const SideBar = ({ openMap }) => {
  const [establishItem] = useState([
    "restaurant",
    "dessert",
    "fastfood",
    "bar",
  ]);
  const [cuisineItem] = useState([
    "European",
    "Italian",
    "Greek",
    "Eastern European",
  ]);

  const {
    restaurantsState: { delivery, outdoorsitting },
    restaurantsDispatch,
  } = useGlobalContext();

  const typeListRestaurant = (type) => {
    return type.map((item, i) => {
      return (
        <div key={i}>
          <span>{item[0].toUpperCase() + item.slice(1)}</span>
        </div>
      );
    });
  };

  return (
    <div className="restaurants__sidebar">
      <div className="map--container">
        <button className="button__map" onClick={openMap}>
          <FaLocationArrow className="button__map--loc" />
          <span>View</span>
        </button>
      </div>

      <div>
        <div
          className="type-restaurant"
          onClick={(e) =>
            restaurantsDispatch({
              type: "TYPE_RESTAURANTS",
              payload: e.target.innerText.toLowerCase(),
            })
          }
        >
          {typeListRestaurant(establishItem)}
        </div>

        <span className="line"></span>

        <div
          className="type-restaurant"
          onClick={(e) =>
            restaurantsDispatch({
              type: "TYPE_RESTAURANTS",
              payload: e.target.innerText.toLowerCase(),
            })
          }
        >
          {typeListRestaurant(cuisineItem)}
        </div>

        <span className="line"></span>

        <div className="type-restaurant">
          <div>
            <input
              type="checkbox"
              id="delivery"
              value="delivery"
              checked={delivery}
              onChange={() =>
                restaurantsDispatch({
                  type: "DELIVERY_RESTAURANTS",
                })
              }
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="outdoorsitting"
              value="outdoorsitting"
              checked={outdoorsitting}
              onChange={() =>
                restaurantsDispatch({
                  type: "OUTDOORSITTING_RESTAURANTS",
                })
              }
            />
            <label htmlFor="outdoorsitting">Outdoor Sitting</label>
          </div>
        </div>

        <span className="line"></span>
      </div>
      <button
        className="button__clear-filters"
        onClick={(e) =>
          restaurantsDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default SideBar;
