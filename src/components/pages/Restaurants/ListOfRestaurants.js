import React from 'react';
import FilterRestaurants from '../../FilterRestaurants';
import ListRestaurant from './ListRestaurant';

const ListOfRestaurants = ({ listRestaurants, handleFilter }) => {
    return (
        <div className='list-of-restaurants'>
            <FilterRestaurants handleFilter={handleFilter} />
            <div className='wrapper'>
                {listRestaurants.map(restaurant => (
                    <ListRestaurant restaurant={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default ListOfRestaurants;