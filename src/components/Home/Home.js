/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import RestaurantsContainer from "./RestaurantsContainer";
import DrinkSection from "./DrinkSection";
import MobileAppSection from "./MobileAppSection";
import { useGlobalContext } from "../../context/GlobalContext";

const Home = () => {
  const styleContainer = {
    height: "50vh",
    padding: "3rem",
    textAlign: "center",
    display: "grid",
    placeItems: "center",
  };

  const styleError = {
    fontSize: "3.5rem",
    fontWeight: "600",
    color: "red",
  };

  const { fetchError } = useGlobalContext();

  return (
    <>
      <Header />
      <main>
        {!fetchError && <RestaurantsContainer />}
        {fetchError && (
          <div style={styleContainer}>
            <p style={styleError}>{`Error: ${fetchError}`}</p>
          </div>
        )}
        <DrinkSection />
        <MobileAppSection />
      </main>
    </>
  );
};

export default Home;
