/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLocationArrow, FaPhone, FaClock, FaHeart } from 'react-icons/fa';
import Rating from '../Rating';

const Restaurant = ({ allRestaurants, handleBookmark, bookmarked }) => {
    const { id } = useParams();
    const [days, setDays] = useState(['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa']);
    const displayRestaurant = allRestaurants.find(restaurant => (restaurant.id).toString() === id);
    const now = new Date();
    const currDay = now.getDay();
    const currHours = now.getHours();
    const workingDay = days.find((_, i) => currDay === i);

    const daysInNum = () => {
        if (workingDay === 'su') return 0;
        if (workingDay === 'mo') return 1;
        if (workingDay === 'tu') return 2;
        if (workingDay === 'we') return 3;
        if (workingDay === 'th') return 4;
        if (workingDay === 'fr') return 5;
        if (workingDay === 'sa') return 6;
    }

    if (bookmarked.some(restaurant => (restaurant.id).toString() === id)) {
        displayRestaurant.checked = true;
    } else {
        displayRestaurant.checked = false;
    }

    return (
        <main>
            <section id='section' className='restaurant'>
                <div className='restaurant__header flex-container' style={{ justifyContent: 'space-between' }}>
                    <h1 className='restaurant__title'>{displayRestaurant.name}</h1>
                    <div>
                        {
                            < FaHeart className={displayRestaurant.checked === true ? 'icon__header--heart-booked' : 'icon__header--heart'} onClick={() => handleBookmark(displayRestaurant.id)} />
                        }
                    </div>
                </div>
                <Rating restaurant={displayRestaurant} />
                <div className='restaurant__info mt--medium'>
                    <div className='flex-container'>
                        <FaLocationArrow className='icon__info icon__info--location' />
                        <p className='restaurant__address'>{displayRestaurant.address}</p>
                    </div>
                    <div className='flex-container'>
                        <FaPhone className='icon__info icon__info--phone' />
                        <p className='restaurant__number'>{displayRestaurant.number}</p>
                    </div>
                    <div className='flex-container'>
                        <FaClock className='icon__info icon__info--clock' />
                        <div className='restaurant__worktime'>
                            <p>
                                <span style={{ fontWeight: 'bold' }}> {(displayRestaurant.worktime[workingDay].open <= currHours) && (displayRestaurant.worktime[workingDay].closed > currHours) ? <>Open</> : <>Closed</>} now:</span><> </>
                                {
                                    (currDay === daysInNum() && (displayRestaurant.worktime[workingDay].open < 10 ? '0' + (displayRestaurant.worktime[workingDay].open) : (displayRestaurant.worktime[workingDay].open)))
                                } AM
                                - <></>
                                {
                                    (currDay === daysInNum() && (displayRestaurant.worktime[workingDay].closed < 10 ? '0' + (displayRestaurant.worktime[workingDay].closed) : (displayRestaurant.worktime[workingDay].closed)))
                                } AM&#x0003B;
                            </p>
                        </div>
                    </div>
                </div>
                <div className='restaurant__slider mt--large mb--medium'>
                    {
                        displayRestaurant.slider.map((img, i) => (
                            <div className={"restaurant__slide restaurant__img--" + i}>
                                <img src={img} alt='Chinese Food' />
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Restaurant;
