import React from 'react';

const MobileAppSection = () => {
  return (
    <section className='mobile-app'>
    <div className='container'>
        <figure className='mobile--img'>
            <img src="./images/mobile-with-transparent-bg.png" alt="mobile" />
            <div className='restaurant--motto'>
              <p>Good Restaurant</p>
              <p>Good Food</p>
              <p>Good Service</p>
              <p>Good Drink</p>
            </div>
        </figure>
        <div className='box--left'>
          <h2 className='mb--small'>Happy Announce</h2>
          <p className='box--left__para--main'>mobile app</p>
          <p className='box--left__para--sub mb--small'>is available in every os platform</p>
          <img src="./images/google-play-and-app-store.png" alt="mobile app" className='store-app--img' />
        </div>
    </div>
    </section>
  )
}

export default MobileAppSection;