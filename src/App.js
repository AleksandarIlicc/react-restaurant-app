/* eslint-disable react-hooks/exhaustive-deps */
import './sass/App.css';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import GalleryRestaurant from './components/Gallery/GalleryRestaurant';
import GalleryListRestaurant from './components/Gallery/GalleryListRestaurant';
import Bookmark from './components/pages/Bookmark/Bookmark';
import Contact from './components/pages/ContactUs/Contact';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listRestaurants, setListRestaurants] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=>{
  const getData= async ()=>{
    try {
      const res = await fetch('data.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      });
      const data = await res.json();
      setAllRestaurants(data.restaurants);
      setListRestaurants(data.restaurants);
      setFetchError(null)
    } catch(err) {
      setFetchError(err);
    }
  }
    getData();
  },[])

  useEffect(() => {
    setBookmarkCount(bookmarked.length);
  }, [bookmarked]);

  const handleFilter = (e) => {
    const value = e.target.value;

    if (value === '') {
      setListRestaurants(allRestaurants);
    } else {
      const filteredList = allRestaurants.filter(restaurant => restaurant.type.indexOf(value) >= 0);
      setListRestaurants(filteredList);
    }
  }

  const addBookmark = (restaurant) => {
    bookmarked.push(restaurant);
    setBookmarkCount(bookmarked.length);
    restaurant.checked = true;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarked));
  }

  const deleteBookmark = (restaurant) => {
    const updatedBookmark = bookmarked.filter(bookedRestaurant => bookedRestaurant.id !== restaurant.id);
    setBookmarked(updatedBookmark);
    restaurant.checked = false;
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmark));
  }

  const handleBookmark = (id) => {
    const restaurant = allRestaurants.find(restaurant => restaurant.id === id);

    if (restaurant.checked === false) {
      addBookmark(restaurant);
    } else {
      deleteBookmark(restaurant);
    }
  }

  useEffect(() => {
    const storage = localStorage.getItem('bookmarks');
    if (storage) setBookmarked(JSON.parse(storage));
  }, [setBookmarked]);

  useEffect(() => {
    const filterRestaurants = listRestaurants.filter(restaurant => ((restaurant.name).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filterRestaurants);

  }, [listRestaurants, search])

  return (
    <div className="App">
      <Nav bookmarkCount={bookmarkCount} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              allRestaurants={allRestaurants}
              fetchError={fetchError}
              listRestaurants={searchResults}
              handleFilter={handleFilter}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path='/restaurant/:id'
          element={
            <GalleryRestaurant
              allRestaurants={allRestaurants}
              handleBookmark={handleBookmark}
              bookmarked={bookmarked}
            />
          }
        />
        <Route
          path='/restaurantlist/:id'
          element={
            <GalleryListRestaurant
              listRestaurants={listRestaurants}
              handleBookmark={handleBookmark}
              bookmarked={bookmarked}
            />
          }
        />
        <Route
          path='/bookmark'
          element={
            <Bookmark
              bookmarked={bookmarked}
              deleteBookmark={deleteBookmark}
            />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;