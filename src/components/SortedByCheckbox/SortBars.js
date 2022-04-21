import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

const SortBars = ({ checkedBars }) => {
    return (
        <div className='sort-restaurant-container'>
            {
                checkedBars.map(restaurant => (
                    < div className='checked-restaurant'>
                        <Link to={`/restaurantlist/${restaurant.id}`} key={restaurant.id}>
                            <figure className='checked-restaurant__img'>
                                <img src={restaurant.image} alt={restaurant.name} />
                            </figure>
                            <div className='checked-restaurant__info'>
                                <h3 className='checked-restaurant__name mb--small'>
                                    {
                                        restaurant.name.length >= 20 ?
                                            (restaurant.name.slice(0, 20) + '...') :
                                            (restaurant.name)
                                    }
                                </h3>
                                <Rating restaurant={restaurant} />
                                <p className='checked-restaurant__address mt--small'>
                                    {
                                        restaurant.address.length >= 30 ?
                                            (restaurant.address.slice(0, 30) + '...') :
                                            (restaurant.address)
                                    }
                                </p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SortBars;