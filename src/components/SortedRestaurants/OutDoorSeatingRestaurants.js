import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const OutDoorSeatingRestaurants = ({ restaurant }) => {
    return (
        < div className='slide'>
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                <figure className='restaurants__img'>
                    <img src={restaurant.image} alt={restaurant.name} />
                </figure>
                <div className='restaurants__info'>
                    <h3 className='restaurants__name'>
                        {
                            restaurant.name.length >= 15 ?
                                (restaurant.name.slice(0, 20) + '...') :
                                (restaurant.name)
                        }
                    </h3>
                    <Rating restaurant={restaurant} />
                    <p className='restaurants__address'>{restaurant.address}</p>
                </div>
            </Link>
        </div>
    );
};

export default OutDoorSeatingRestaurants;
