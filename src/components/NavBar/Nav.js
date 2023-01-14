import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";

const Nav = () => {
  const {
    restaurantsState: { booked },
  } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);
  const bookmarkCount = booked.length;

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <nav className="nav">
      <div className="nav__logo">
        {" "}
        <span className="nav__logo--restaurant">
          <Link to="/">Restaurant</Link>
        </span>
        ForYou
      </div>
      <ul className={!showNav ? "nav__list" : "nav__list nav__list--open"}>
        <li className="nav__item nav__item--animate">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item nav__item--animate">
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li className="nav__item nav__item--animate">
          <Link to="#">About</Link>
        </li>
        <li className="nav__item nav__item--animate">
          <Link to="/contact">Contact Us</Link>
        </li>
        <div className="nav__item nav__bookmark">
          <Link to="/bookmark">Bookmark</Link>
          <FaBookmark className="icon__bookmark" />
          <span className="bookmark-notification">{bookmarkCount}</span>
        </div>
        <FaTimes className="nav__times" onClick={closeNav} />
      </ul>
      <div className="nav__bars" onClick={openNav}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Nav;
