/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import RestaurantsContainer from './RestaurantsContainer';
import { useState } from 'react';
import DrinkSection from './DrinkSection';
import MobileAppSection from './MobileAppSection';

const Home = ({
    allRestaurants,
    fetchError,
    listRestaurants,
    handleFilter,
    search,
    setSearch }) => {
    const checkboxes = document.querySelectorAll('.input__checkbox');
    const [establishItem, setEstablishItem] = useState(['restaurant', 'dessert', 'fastfood', 'bar']);
    const [featuresItem, setFeaturesItem] = useState(['delivery', 'takeout', 'outdoor sitting', 'free wifi']);
    const [mealsItem, setMealsItem] = useState(['breakfast', 'brunch', 'lunch', 'dinner']);
    const [priceItem, setPriceItem] = useState(['Cheap Eats', 'Mid-range', 'Fine Dining']);
    const [cuisineItem, setCuisineItem] = useState(['European', 'Italian', 'International', 'Eastern European']);
    const [dishesItem, setDishesItem] = useState(['Salad', 'Pesto', 'Pasta', 'Fish']);
    const [checkedRestaurants, setCheckedRestaurants] = useState([]);
    const [checkedDesserts, setCheckedDesserts] = useState([]);
    const [checkedFastFoods, setCheckedFastFoods] = useState([]);
    const [checkedBars, setCheckedBars] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isRestaurantChecked, setIsRestaurantChecked] = useState(false);
    const [isDessertChecked, setIsDessertChecked] = useState(false);
    const [isFastFoodChecked, setIsFastFoodChecked] = useState(false);
    const [isBarChecked, setIsBarChecked] = useState(false);

    const handleCheck = (e) => {
        const handleAdd = (value, arr, setArr, checkedFunc) => {
            checkedFunc(true);
            const addedRestaurant = allRestaurants.filter(restaurant => restaurant.type.indexOf(value) >= 0);
            const found = arr.some(restaurant => addedRestaurant.includes(restaurant));
            if (!found) {
                setArr([...arr, ...addedRestaurant]);
            } else {
                return;
            }
        }
        const handleDelete = (value, arr, setArr, checkedFunc) => {
            checkedFunc(false);
            const deletedRestaurants = arr.filter(restaurant => restaurant.type.indexOf(value) >= 0);
            const ids = deletedRestaurants.map(res => res.id);
            const updatedList = arr.filter((restaurant, i) => restaurant.id !== ids[i]);
            setArr([...updatedList]);
        }

        const someChecked = [...checkboxes].some(box => box.checked);

        if (someChecked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }

        if (e.target.checked) {
            if (e.target.value === 'restaurant') {
                handleAdd(e.target.value, checkedRestaurants, setCheckedRestaurants, setIsRestaurantChecked);
            }
            if (e.target.value === 'dessert') {
                handleAdd(e.target.value, checkedDesserts, setCheckedDesserts, setIsDessertChecked);
            }
            if (e.target.value === 'fastfood') {
                handleAdd(e.target.value, checkedFastFoods, setCheckedFastFoods, setIsFastFoodChecked);
            }
            if (e.target.value === 'bar') {
                handleAdd(e.target.value, checkedBars, setCheckedBars, setIsBarChecked);
            }

        } else {
            if (e.target.value === 'restaurant') {
                handleDelete(e.target.value, checkedRestaurants, setCheckedRestaurants, setIsRestaurantChecked);
            }
            if (e.target.value === 'dessert') {
                handleDelete(e.target.value, checkedDesserts, setCheckedDesserts, setIsDessertChecked);
            }
            if (e.target.value === 'fastfood') {
                handleDelete(e.target.value, checkedFastFoods, setCheckedFastFoods, setIsFastFoodChecked);
            }
            if (e.target.value === 'bar') {
                handleDelete(e.target.value, checkedBars, setCheckedBars, setIsBarChecked);
            }
        }
    }

    const styleContainer = {
        height: '50vh',
        padding: '3rem',
        textAlign: 'center',
        display: 'grid',
        placeItems: 'center'
    }

    const styleError = {
        fontSize: '3.5rem',
        fontWeight: '600',
        color: 'red'
    }

    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
            />
            <main>
                {!fetchError &&
                    <RestaurantsContainer
                        allRestaurants={allRestaurants}
                        handleCheck={handleCheck}
                        establishItem={establishItem}
                        featuresItem={featuresItem}
                        mealsItem={mealsItem}
                        priceItem={priceItem}
                        cuisineItem={cuisineItem}
                        dishesItem={dishesItem}
                        isChecked={isChecked}
                        isRestaurantChecked={isRestaurantChecked}
                        isDessertChecked={isDessertChecked}
                        isFastFoodChecked={isFastFoodChecked}
                        isBarChecked={isBarChecked}
                        checkedRestaurants={checkedRestaurants}
                        checkedDesserts={checkedDesserts}
                        checkedFastFoods={checkedFastFoods}
                        checkedBars={checkedBars}
                        listRestaurants={listRestaurants}
                        handleFilter={handleFilter}
                    />
                }
                {fetchError &&
                    <div style={styleContainer}>
                        <p style={styleError}>{`Error: ${fetchError}`}</p>
                    </div>
                }
                
                <DrinkSection />

                <MobileAppSection />
                
            </main>
        </>
    );
};

export default Home;
