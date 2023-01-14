/* eslint-disable react-hooks/exhaustive-deps */
import "./sass/App.css";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import GalleryListRestaurant from "./components/Gallery/GalleryListRestaurant";
import Bookmark from "./pages/Bookmark/Bookmark";
import Contact from "./pages/ContactUs/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Restaurants from "./components/Home/Restaurants";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantlist/:id" element={<GalleryListRestaurant />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
