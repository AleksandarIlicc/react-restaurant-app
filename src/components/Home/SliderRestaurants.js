import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeliveryRestaurants from '../SortedRestaurants/DeliveryRestaurants';
import OutDoorSeatingRestaurants from '../SortedRestaurants/OutDoorSeatingRestaurants';
import ListOfRestaurants from '../pages/Restaurants/ListOfRestaurants';

const Restaurants = ({ allRestaurants, listRestaurants, handleFilter }) => {
    // Filter Delivery Restaurants
    const filterDeliveryRestaurants = allRestaurants.filter(restaurant => restaurant.delivery === true);
    // Filter OutDoor Seating Restaurants
    const filterOutsittingRestaurants = allRestaurants.filter(restaurant => restaurant.outdoorSitting === true);
    // Ref Slider
    const refDeliverySlider = useRef();
    const refOutSeatingSlider = useRef();
    // Responsive Slider
    const responsiveSlider = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    const deliverySliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [...responsiveSlider]
    };

    const outdoorSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [...responsiveSlider]
    };

    const styleMessage = {
        fontSize: '3rem',
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        marginTop: '50px'
    }

    return (
        <div className='restaurants__container restaurants__grid'>
            {allRestaurants.length ?
                (
                    <>
                        <ListOfRestaurants
                            listRestaurants={listRestaurants}
                            handleFilter={handleFilter}
                        />
                        <div className='slider'>
                            <h3 style={{ marginLeft: 10 }} className='heading__tertiary mb--medium'>Delivery restaurants</h3>
                            <Slider ref={refDeliverySlider} {...deliverySliderSettings}>
                                {filterDeliveryRestaurants.map(restaurant => (
                                    <DeliveryRestaurants restaurant={restaurant} />
                                ))}
                            </Slider>
                            <button className='delivery__arrow delivery__arrow--left' onClick={() => refDeliverySlider.current.slickPrev()}>
                                <FaAngleLeft />
                            </button>
                            <button className='delivery__arrow delivery__arrow--right' onClick={() => refDeliverySlider.current.slickNext()}>
                                <FaAngleRight />
                            </button>
                        </div>
                        <div className='slider'>
                            <h3 style={{ marginLeft: 10 }} className='heading__tertiary mb--medium'>Outdoor Seating restaurants</h3>
                            <Slider ref={refOutSeatingSlider} {...outdoorSliderSettings}>
                                {filterOutsittingRestaurants.map(restaurant => (
                                    <OutDoorSeatingRestaurants restaurant={restaurant} />
                                ))}
                            </Slider>
                            <button className='delivery__arrow delivery__arrow--left' onClick={() => refOutSeatingSlider.current.slickPrev()}>
                                <FaAngleLeft />
                            </button>
                            <button className='delivery__arrow delivery__arrow--right' onClick={() => refOutSeatingSlider.current.slickNext()}>
                                <FaAngleRight />
                            </button>
                        </div>
                    </>
                ) :
                (<p style={styleMessage}>There are no restaurants!</p>)
            }
        </div>
    )
}

export default Restaurants;
