/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLocationArrow, FaPhone, FaClock, FaRegHeart, FaHeart } from 'react-icons/fa';
import Rating from '../Rating';

const GalleryListRestaurant = ({ listRestaurants, handleBookmark, bookmarked }) => {
    const { id } = useParams();
    const [days, setDays] = useState(['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']);
    const listRestaurant = listRestaurants.find(res => (res.id).toString() === id);
    const now = new Date();
    const currDay = now.getDay();
    const currHours = now.getHours();
    const workingDay = days.find((_, i) => currDay - 1 === i);

    const daysInNum = () => {
        if (workingDay === 'su') return 0;
        if (workingDay === 'mo') return 1;
        if (workingDay === 'tu') return 2;
        if (workingDay === 'we') return 3;
        if (workingDay === 'th') return 4;
        if (workingDay === 'fr') return 5;
        if (workingDay === 'sa') return 6;
    }
    
    return (
        <main>
            <section id='section' className='restaurant'>
                <div className='restaurant__header flex-container' style={{ justifyContent: 'space-between' }}>
                    <h1 className='restaurant__title'>{listRestaurant.name}</h1>
                    <div>
                        {
                            <FaHeart className={bookmarked.length && listRestaurant.checked ? 'icon__header--heart-booked' : 'icon__header--heart'} onClick={() => handleBookmark(listRestaurant.id)} />
                        }
                    </div>
                </div>
                <Rating restaurant={listRestaurant} />
                <div className='restaurant__info mt--medium'>
                    <div className='flex-container'>
                        <FaLocationArrow className='icon__info icon__info--location' />
                        <p className='restaurant__address'>{listRestaurant.address}</p>
                    </div>
                    <div className='flex-container'>
                        <FaPhone className='icon__info icon__info--phone' />
                        <p className='restaurant__number'>{listRestaurant.number}</p>
                    </div>
                    <div className='flex-container'>
                        <FaClock className='icon__info icon__info--clock' />
                        <div className='restaurant__worktime'>
                            <p>
                                <span style={{ fontWeight: 'bold' }}> {(listRestaurant.worktime[workingDay].open <= currHours) && (listRestaurant.worktime[workingDay].closed > currHours) ? <>Open</> : <>Closed</>} now:</span><> </>
                                {
                                    (currDay === daysInNum() && (listRestaurant.worktime[workingDay].open < 10 ? '0' + (listRestaurant.worktime[workingDay].open) : (listRestaurant.worktime[workingDay].open)))
                                } AM
                                - <></>
                                {
                                    (currDay === daysInNum() && (listRestaurant.worktime[workingDay].closed < 10 ? '0' + (listRestaurant.worktime[workingDay].closed) : (listRestaurant.worktime[workingDay].closed)))
                                } AM&#x0003B;
                            </p>
                        </div>
                    </div>
                </div>
                <div className='restaurant__slider mt--large mb--medium'>
                    {
                        listRestaurant.slider.map((img, i) => (
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

export default GalleryListRestaurant;