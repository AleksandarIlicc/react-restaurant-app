import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import FilterRestaurants from "../../components/FilterRestaurants";
import Spinner from "../../components/spinner";
import SingleRestaurant from "./SingleRestaurant";

const RestaurantsList = () => {
  const {
    restaurantsState: {
      restaurants,
      loading,
      search,
      sort,
      delivery,
      outdoorsitting,
    },
  } = useGlobalContext();

  const sortRestaurants = () => {
    let copyRestaurantsArr = restaurants;

    if (sort !== "all") {
      copyRestaurantsArr = copyRestaurantsArr.filter(
        (res) => res.type === sort
      );
    } else {
      copyRestaurantsArr = restaurants;
    }

    if (search) {
      const searchedRestaurant = copyRestaurantsArr.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      copyRestaurantsArr = searchedRestaurant;
    }

    if (delivery) {
      copyRestaurantsArr = copyRestaurantsArr.filter(
        (res) => res.delivery === delivery
      );
    }

    if (outdoorsitting) {
      copyRestaurantsArr = copyRestaurantsArr.filter(
        (res) => res.outdoorsitting === outdoorsitting
      );
    }

    return copyRestaurantsArr;
  };

  return (
    <div className="restaurants-list">
      <FilterRestaurants />
      <div className="wrapper">
        {loading ? (
          <Spinner />
        ) : sortRestaurants().length ? (
          sortRestaurants().map((restaurant) => (
            <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p>Does not find restaurant</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantsList;
