import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash, FaRegEye } from "react-icons/fa";
import Rating from "../../components/Rating";
import { useGlobalContext } from "../../context/GlobalContext";

const Bookmark = () => {
  const styleMessage = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#ce5e5e",
    textAlign: "center",
  };

  const {
    restaurantsState: { booked },
    restaurantsDispatch,
  } = useGlobalContext();

  return (
    <section className="bookmark">
      <div className="bookmark__header text-center">
        <button className="button__bookmark">
          <Link to="/">
            <FaArrowLeft className="bookmark__arrow-left" />
            <span>Back to Home</span>
          </Link>
        </button>
        <h2>My Favourite Restaurants</h2>
      </div>

      <div className="bookmark__body">
        {booked &&
          booked.map((restaurant) => (
            <article className="bookmark__restaurant" key={restaurant.id}>
              <Link to={`/restaurant/${restaurant.id}`}>
                <figure className="bookmark__img">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <FaRegEye />
                </figure>
              </Link>
              <div className="bookmark__info">
                <div className="bookmark__info--left">
                  <h3 className="mb--small">{restaurant.name}</h3>
                  <p>{restaurant.address}</p>
                  <Rating restaurant={restaurant} />
                </div>
                <div className="bookmark__info--right">
                  <ul className="bookmark__type-list">
                    <li>{restaurant.type}</li>
                  </ul>
                  <FaTrash
                    onClick={() =>
                      restaurantsDispatch({
                        type: "BOOKED_RESTAURANT",
                        payload: restaurant,
                      })
                    }
                  />
                </div>
              </div>
            </article>
          ))}
        {booked.length === 0 && (
          <p style={styleMessage}>There is no booked restaurant yet!</p>
        )}
      </div>
    </section>
  );
};

export default Bookmark;
