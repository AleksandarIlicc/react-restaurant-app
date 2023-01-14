/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import GallerySection from "./GallerySection";

const GalleryListRestaurant = () => {
  const {
    restaurantsState: { restaurants },
  } = useGlobalContext();
  const { id } = useParams();
  const singleRestaurant = restaurants.find((res) => res.id.toString() === id);

  return (
    <main>
      <GallerySection singleRestaurant={singleRestaurant} id={id} />
    </main>
  );
};

export default GalleryListRestaurant;
