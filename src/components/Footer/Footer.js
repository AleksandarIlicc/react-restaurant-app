import React from 'react';

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>© {currYear} aleksandarilic.com | Practice yourself everyday. </p>
        </footer>
    )
}

export default Footer;