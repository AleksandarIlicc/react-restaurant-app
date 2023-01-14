/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Restaurants from "./Restaurants";
import SideBar from "./SideBar";
import Map from "./Map";

const RestaurantsContainer = () => {
  const [showMap, setShowMap] = useState(false);
  const openMap = () => setShowMap(true);

  return (
    <>
      <section className="restaurants">
        <h2 className="heading__secondary text-center mb--large">
          Restaurants in New City
        </h2>
        <div className="restaurants__wrapper">
          <SideBar showMap={showMap} openMap={openMap} />
          <Restaurants />
        </div>
      </section>
      <Map showMap={showMap} setShowMap={setShowMap} />
    </>
  );
};

export default RestaurantsContainer;
