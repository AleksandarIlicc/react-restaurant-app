/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Rating from '../Rating';
import { FaLocationArrow, FaPhone, FaClock, FaHeart } from 'react-icons/fa';

const GallerySection = ({ restaurant, handleBookmark, bookmarked, id }) => {
    const [days, setDays] = useState(['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa']);
    const now = new Date();
    const currDay = now.getDay();
    const currHours = now.getHours();
    const workingDay = days.find((_, i) => currDay === i);
    let openClose;

    const daysInNum = () => {
        if (workingDay === 'su') return 0;
        if (workingDay === 'mo') return 1;
        if (workingDay === 'tu') return 2;
        if (workingDay === 'we') return 3;
        if (workingDay === 'th') return 4;
        if (workingDay === 'fr') return 5;
        if (workingDay === 'sa') return 6;
    }

    if ((restaurant.worktime[workingDay].open <= currHours) && (restaurant.worktime[workingDay].closed > currHours)) {
        openClose = 'Open now';
    } else {
        openClose = 'Closed now';
    }

    if (bookmarked.some(rest => (rest.id).toString() === id)) {
        restaurant.checked = true;
    } else {
        restaurant.checked = false;
    }

  return (
        <section id='section' className='restaurant'>
                <div className='restaurant__header flex-container' style={{ justifyContent: 'space-between' }}>
                    <h1 className='restaurant__title'>{restaurant.name}</h1>
                    <div>
                        {
                            < FaHeart className={restaurant.checked === true ? 'icon__header--heart-booked' : 'icon__header--heart'} onClick={() => handleBookmark(restaurant.id)} />
                        }
                    </div>
                </div>
                <Rating restaurant={restaurant} />
                <div className='restaurant__info mt--medium'>
                    <div className='flex-container'>
                        <FaLocationArrow className='icon__info icon__info--location' />
                        <p className='restaurant__address'>{restaurant.address}</p>
                    </div>
                    <div className='flex-container'>
                        <FaPhone className='icon__info icon__info--phone' />
                        <p className='restaurant__number'>{restaurant.number}</p>
                    </div>
                    <div className='flex-container'>
                        <FaClock className='icon__info icon__info--clock' />
                        <div className='restaurant__worktime'>
                            <p>
                                <span style={openClose === 'Open now' ? {color: '#64cc64', fontWeight: '600'} : {color: '#ff5858', fontWeight: '600'}}>{openClose}</span> {" "}
                                {
                                    openClose === 'Open now' ?
                                    (
                                        currDay === daysInNum() && (restaurant.worktime[workingDay].open < 10 ? 
                                        '0' + (restaurant.worktime[workingDay].open) : 
                                        (restaurant.worktime[workingDay].open))
                                    ) : '--'
                                } AM
                                - <></>
                                {
                                    openClose === 'Open now' ?
                                    (
                                        currDay === daysInNum() && (restaurant.worktime[workingDay].closed < 10 ?
                                        '0' + (restaurant.worktime[workingDay].closed) : 
                                        (restaurant.worktime[workingDay].closed))
                                    ) : '--'
                                } PM&#x0003B;
                            </p>
                        </div>
                    </div>
                </div>
                <div className='restaurant__slider mt--large mb--medium'>
                    {
                        restaurant.slider.map((img, i) => (
                            <div className={"restaurant__slide restaurant__img--" + i}>
                                <img src={img} alt='Chinese Food' />
                            </div>
                        ))
                    }
                </div>
        </section>
  );
};

export default GallerySection;