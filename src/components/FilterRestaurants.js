import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const FilterRestaurants = () => {
  const { restaurantsDispatch } = useGlobalContext();

  return (
    <div className="filter-restaurant mb--medium">
      <select
        onChange={(e) =>
          restaurantsDispatch({
            type: "SORT_RESTAURANTS",
            payload: e.target.value,
          })
        }
      >
        <option value="all">All</option>
        <option value="restaurant">Restaurant</option>
        <option value="dessert">Dessert</option>
        <option value="bar">Bar</option>
        <option value="fastfood">Fast &#x00026; food</option>
      </select>
    </div>
  );
};

export default FilterRestaurants;
