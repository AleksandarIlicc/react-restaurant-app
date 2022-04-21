import React from "react";
import Slider from "react-slick";

const DrinkSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <section className="drink">
            <h2 className='heading__secondary text-center mb--large'>Choose what to drink</h2>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/images/drink-slider--1.jpg" alt="wine" className="drink-slider__img" />
                    </div>
                    <div>
                        <img src="/images/drink-slider--2.jpg" alt="beer" className="drink-slider__img" />
                    </div>
                    <div>
                        <img src="/images/drink-slider--3.jpg" alt="wiskey" className="drink-slider__img" />
                    </div>
                </Slider>
            </div>

            <div className="drink__container">
                <div className="drink__box">
                    <figure className="drink__img">
                        <img src="/images/drink--1.jpg" alt="wine" />
                    </figure>
                    <div className="drink__info">
                        <h3>Wine</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent cursus nisl at mattis consectetur. Sed ut placerat turpis.
                            Phasellus diam justo, consectetur sit amet libero porta, accumsan lacinia diam. Aenean.
                        </p>
                        <button className="button__drink">See more</button>
                    </div>
                </div>
                <div className="drink__box">
                    <figure className="drink__img">
                        <img src="/images/drink--2.jpg" alt="beer" />
                    </figure>
                    <div className="drink__info">
                        <h3>Beer</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo lacus,
                            dignissim ut risus quis, feugiat dapibus felis. Mauris et eleifend felis.
                            Quisque dignissim rutrum nisi vitae laoreet. Aliquam scelerisque.
                        </p>
                        <button className="button__drink">See more</button>
                    </div>
                </div>
                <div className="drink__box">
                    <figure className="drink__img">
                        <img src="/images/drink--3.jpg" alt="wiskey" />
                    </figure>
                    <div className="drink__info">
                        <h3>Wiskey</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit ligula
                            vel sem convallis, vitae fringilla eros interdum. Aliquam rutrum at tellus ut convallis.
                            Sed pretium orci in orci laoreet.
                        </p>
                        <button className="button__drink">See more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default DrinkSection;