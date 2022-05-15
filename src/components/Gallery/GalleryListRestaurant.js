/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GallerySection from './GallerySection';

const GalleryListRestaurant = ({ listRestaurants, handleBookmark, bookmarked }) => {
    const { id } = useParams();
    const listRestaurant = listRestaurants.find(res => (res.id).toString() === id);

    if (bookmarked.some(restaurant => (restaurant.id).toString() === id)) {
        listRestaurant.checked = true;
    } else {
        listRestaurant.checked = false;
    }
    
    return (
        <main>
            <GallerySection 
                restaurant={listRestaurant}
                handleBookmark={handleBookmark}
                bookmarked={bookmarked}
                id={id}
            />
        </main>
    );
};

export default GalleryListRestaurant;