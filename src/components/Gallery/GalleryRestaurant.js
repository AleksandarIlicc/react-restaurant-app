/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GallerySection from './GallerySection';

const Restaurant = ({ allRestaurants, handleBookmark, bookmarked }) => {
    const { id } = useParams();
    const displayRestaurant = allRestaurants.find(restaurant => (restaurant.id).toString() === id);

    return (
        <main>
            <GallerySection 
                restaurant={displayRestaurant}
                handleBookmark={handleBookmark}
                bookmarked={bookmarked}
                id={id}
            />
        </main>
    );
};

export default Restaurant;
