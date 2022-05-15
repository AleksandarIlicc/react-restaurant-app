/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SliderRestaurants from './SliderRestaurants';
import SideBar from './SideBar';
import SortRestaurants from '../SortedByCheckbox/SortRestaurants';
import SortDesserts from '../SortedByCheckbox/SortDesserts';
import SortFastFood from '../SortedByCheckbox/SortFastFood';
import SortBars from '../SortedByCheckbox/SortBars';
import Map from './Map';

const RestaurantsContainer = (
    {
        allRestaurants,
        handleCheck,
        establishItem,
        featuresItem,
        mealsItem, 
        priceItem,
        cuisineItem,
        dishesItem,
        isChecked,
        isRestaurantChecked,
        isDessertChecked,
        isFastFoodChecked,
        isBarChecked,
        listRestaurants,
        checkedRestaurants,
        checkedDesserts,
        checkedFastFoods,
        checkedBars,
        handleFilter
    }) => {
    const [showMap, setShowMap] = useState(false);

    const openMap = () => setShowMap(true);

    return <>
        <section className='restaurants'>
            <h2 className='heading__secondary text-center mb--large'>Restaurants in New City</h2>
            <div className='restaurants__wrapper'>
                <SideBar
                    handleCheck={handleCheck}
                    establishItem={establishItem}
                    featuresItem={featuresItem}
                    mealsItem={mealsItem}
                    priceItem={priceItem}
                    cuisineItem={cuisineItem}
                    dishesItem={dishesItem}
                    showMap={showMap}
                    openMap={openMap}
                />
                {!isChecked ?
                    (<SliderRestaurants
                        allRestaurants={allRestaurants}
                        listRestaurants={listRestaurants}
                        handleFilter={handleFilter}
                    />) :
                    (<div className='restaurant-list restaurants__grid'>
                        {isRestaurantChecked && <SortRestaurants checkedRestaurants={checkedRestaurants} />}
                        {isDessertChecked && <SortDesserts checkedDesserts={checkedDesserts} />}
                        {isFastFoodChecked && <SortFastFood checkedFastFoods={checkedFastFoods} />}
                        {isBarChecked && <SortBars checkedBars={checkedBars} />}
                    </div>)
                }
            </div>
        </section>
        <Map
            showMap={showMap}
            setShowMap={setShowMap}
        />
    </>
};

export default RestaurantsContainer;