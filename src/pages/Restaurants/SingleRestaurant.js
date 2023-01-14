import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

const SingleRestaurant = ({ restaurant }) => {
  return (
    <div className="list-restaurant">
      <Link to={`/restaurantlist/${restaurant.id}`} key={restaurant.id}>
        <figure className="list-restaurant__img">
          <img src={restaurant.image} alt={restaurant.name} />
        </figure>
        <div className="list-restaurant__info">
          <h3 className="list-restaurant__name mb--small">
            {restaurant.name.length >= 20
              ? restaurant.name.slice(0, 20) + "..."
              : restaurant.name}
          </h3>
          <Rating restaurant={restaurant} />
          <p className="list-restaurant__address mt--small">
            {restaurant.address.length >= 30
              ? restaurant.address.slice(0, 30) + "..."
              : restaurant.address}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleRestaurant;
