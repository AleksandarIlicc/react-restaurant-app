import React, { useState } from 'react';
import Search from '../Home/Search';
import { FaAngleDoubleDown } from 'react-icons/fa';

const Header = ({ search, setSearch }) => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const openSearchBar = () => setShowSearchBar(true);

    return <header className={!showSearchBar ? 'header' : 'header header--defaultHeight'}>
        <div className='header__info'>
            <h1 className='heading__primary mb--large'>Find your favourite restourant!</h1>
            <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna
                cursus iaculis rutrum. Orci varius natoque penatibus et magnis dis parturient.
            </p>
        </div>
        <FaAngleDoubleDown className={!showSearchBar ? 'header__arrow-down' : 'header__arrow-down hide'} onClick={openSearchBar} />
        <Search
            search={search}
            setSearch={setSearch}
            showSearchBar={showSearchBar}
        />
    </header>;
};

export default Header;
