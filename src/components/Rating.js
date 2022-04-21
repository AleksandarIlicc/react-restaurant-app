import React from 'react';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';

const Rating = ({ restaurant }) => {
    return (
        <div className='restaurants__rating'>
            <div className='restaurants__rating--number'>
                <span>
                    {restaurant.rating}
                </span>
            </div>
            {
                restaurant.rating >= 1 ?
                    <FaStar className='restaurants__rating--star' /> :
                    restaurant.rating >= 0.5 ?
                        <FaStarHalfAlt className='restaurants__rating--star' /> :
                        <FaRegStar className='restaurants__rating--star' />

            }
            {
                restaurant.rating >= 2 ?
                    <FaStar className='restaurants__rating--star' /> :
                    restaurant.rating >= 1.5 ?
                        <FaStarHalfAlt className='restaurants__rating--star' /> :
                        <FaRegStar className='restaurants__rating--star' />

            }
            {
                restaurant.rating >= 3 ?
                    <FaStar className='restaurants__rating--star' /> :
                    restaurant.rating >= 2.5 ?
                        <FaStarHalfAlt className='restaurants__rating--star' /> :
                        <FaRegStar className='restaurants__rating--star' />

            }
            {
                restaurant.rating >= 4 ?
                    <FaStar className='restaurants__rating--star' /> :
                    restaurant.rating >= 3.5 ?
                        <FaStarHalfAlt className='restaurants__rating--star' /> :
                        <FaRegStar className='restaurants__rating--star' />

            }
            {
                restaurant.rating >= 5 ?
                    <FaStar className='restaurants__rating--star' /> :
                    restaurant.rating >= 4.5 ?
                        <FaStarHalfAlt className='restaurants__rating--star' /> :
                        <FaRegStar className='restaurants__rating--star' />

            }
        </div>
    );
};

export default Rating;
