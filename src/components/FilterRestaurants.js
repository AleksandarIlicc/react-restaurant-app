import React from 'react';

const FilterRestaurants = ({ handleFilter }) => {
    return (
        <div className='filter-restaurant mb--medium'>
            <select onChange={(e) => handleFilter(e)}>
                <option value=''>All</option>
                <option value='restaurant'>Restaurant</option>
                <option value='dessert'>Dessert</option>
                <option value='bar'>Bar</option>
                <option value='fastfood'>Fast &#x00026; food</option>
            </select>
        </div>
    )
}

export default FilterRestaurants;