import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const SortRestaurants = ({ checkedRestaurants }) => {
  return (
    <div className="sort-restaurant-container">
      {checkedRestaurants.map((restaurant) => (
        <div className="checked-restaurant">
          <Link to={`/restaurantlist/${restaurant.id}`} key={restaurant.id}>
            <figure className="checked-restaurant__img">
              <img src={restaurant.image} alt={restaurant.name} />
            </figure>
            <div className="checked-restaurant__info">
              <h3 className="checked-restaurant__name mb--small">
                {restaurant.name.substring(0, 20) + "..."}
              </h3>
              <Rating restaurant={restaurant} />
              <p className="checked-restaurant__address mt--small">
                {restaurant.address.substring(0, 20) + "..."}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SortRestaurants;
