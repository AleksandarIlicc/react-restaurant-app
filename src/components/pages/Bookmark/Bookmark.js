import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrash, FaRegEye } from 'react-icons/fa'
import Rating from '../../Rating';

const Bookmark = ({ bookmarked, deleteBookmark }) => {
    const styleMessage = {
        fontSize: '2rem',
        fontWeight: '600',
        color: '#ce5e5e',
        textAlign: 'center',
    }

    return (
        <section className='bookmark'>
            <div className='bookmark__header text-center'>
                <button className='button__bookmark'>
                    <Link to='/'>
                        <FaArrowLeft className='bookmark__arrow-left' />
                        <span>
                            Back to Home
                        </span>
                    </Link>
                </button>
                <h2>My Favourite Restaurants</h2>
            </div>

            <div className='bookmark__body'>
                {bookmarked && bookmarked.map(restaurant => (
                    <article className='bookmark__restaurant' key={restaurant.id}>
                        <Link to={`/restaurant/${restaurant.id}`}>
                            <figure className='bookmark__img' >
                                <img src={restaurant.image} alt={restaurant.name} />
                                <FaRegEye />
                            </figure>
                        </Link>
                        <div className='bookmark__info'>
                            <div className='bookmark__info--left'>
                                <h3 className='mb--small'>{restaurant.name}</h3>
                                <p>{restaurant.address}</p>
                                <Rating restaurant={restaurant} />
                            </div>
                            <div className='bookmark__info--right'>
                                <ul className='bookmark__type-list'>
                                    {restaurant.type.map(t => {
                                        const typeItem = t[0].toUpperCase() + t.slice(1);

                                        return <li>
                                            {
                                                restaurant.type[restaurant.type.length - 1][0].toUpperCase() + t.slice(1) === typeItem ? typeItem + '.' : typeItem + ','
                                            }</li>
                                    })}
                                </ul>
                                <FaTrash onClick={() => deleteBookmark(restaurant)} />
                            </div>
                        </div>
                    </article>
                ))
                }
                {bookmarked.length === 0 && <p style={styleMessage}>There is no booked restaurant yet!</p>}
            </div>
        </section>
    )
}

export default Bookmark;