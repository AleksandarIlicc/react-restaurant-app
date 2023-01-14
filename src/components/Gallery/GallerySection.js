/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Rating from "../Rating";
import { FaLocationArrow, FaPhone, FaClock, FaHeart } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";

const GallerySection = ({ singleRestaurant, id }) => {
  const {
    restaurantsState: { booked },
    restaurantsDispatch,
  } = useGlobalContext();
  const [days] = useState(["su", "mo", "tu", "we", "th", "fr", "sa"]);
  const now = new Date();
  const currDay = now.getDay();
  const currHours = now.getHours();
  const workingDay = days.find((_, i) => currDay === i);

  const daysInNum = () => {
    if (workingDay === "su") return 0;
    if (workingDay === "mo") return 1;
    if (workingDay === "tu") return 2;
    if (workingDay === "we") return 3;
    if (workingDay === "th") return 4;
    if (workingDay === "fr") return 5;
    if (workingDay === "sa") return 6;
  };

  const openCloseTime = () => {
    if (
      singleRestaurant.worktime[workingDay].open <= currHours &&
      singleRestaurant.worktime[workingDay].closed > currHours
    ) {
      return "Open now";
    } else {
      return "Closed now";
    }
  };

  if (booked.some((rest) => rest.id.toString() === id)) {
    singleRestaurant.checked = true;
  } else {
    singleRestaurant.checked = false;
  }

  return (
    <section id="section" className="restaurant">
      <div
        className="restaurant__header flex-container"
        style={{ justifyContent: "space-between" }}
      >
        <h1 className="restaurant__title">{singleRestaurant.name}</h1>
        <div>
          {
            <FaHeart
              className={
                singleRestaurant.checked === true
                  ? "icon__header--heart-booked"
                  : "icon__header--heart"
              }
              onClick={() =>
                restaurantsDispatch({
                  type: "BOOKED_RESTAURANT",
                  payload: singleRestaurant,
                })
              }
            />
          }
        </div>
      </div>
      <Rating restaurant={singleRestaurant} />
      <div className="restaurant__info mt--medium">
        <div className="flex-container">
          <FaLocationArrow className="icon__info icon__info--location" />
          <p className="restaurant__address">{singleRestaurant.address}</p>
        </div>
        <div className="flex-container">
          <FaPhone className="icon__info icon__info--phone" />
          <p className="restaurant__number">{singleRestaurant.number}</p>
        </div>
        <div className="flex-container">
          <FaClock className="icon__info icon__info--clock" />
          <div className="restaurant__worktime">
            <p>
              <span
                style={
                  openCloseTime() === "Open now"
                    ? { color: "#64cc64", fontWeight: "600" }
                    : { color: "#ff5858", fontWeight: "600" }
                }
              >
                {openCloseTime()}
              </span>{" "}
              {openCloseTime() === "Open now"
                ? currDay === daysInNum() &&
                  (singleRestaurant.worktime[workingDay].open < 10
                    ? "0" + singleRestaurant.worktime[workingDay].open
                    : singleRestaurant.worktime[workingDay].open)
                : "--"}{" "}
              AM - <></>
              {openCloseTime() === "Open now"
                ? currDay === daysInNum() &&
                  (singleRestaurant.worktime[workingDay].closed < 10
                    ? "0" + singleRestaurant.worktime[workingDay].closed
                    : singleRestaurant.worktime[workingDay].closed)
                : "--"}{" "}
              PM&#x0003B;
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant__slider mt--large mb--medium">
        {singleRestaurant.slider.map((img, i) => (
          <div key={i} className={"restaurant__slide restaurant__img--" + i}>
            <img src={img} alt="Chinese Food" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
