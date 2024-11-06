import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar"; // Import Navbar component
import RestaurantList from "./components/RestaurantList";
import FeaturedDishes from "./components/FeaturedDishes";
import NearbyRestaurants from "./components/NearbyRestaurants";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage"; // Import the HomePage component
import Menu from "./components/Menu"; // Import the Menu component
import MenuC from "./components/MenuC"; // Import MenuC for city-specific menu
import "./App.css";

const App = () => {
  const [city, setCity] = useState(""); // Manage city search state
  const [isSearching, setIsSearching] = useState(false); // Track if the user is searching

  // Handle city search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setCity(value);
    setIsSearching(!!value); // Set isSearching to true if there is a value in the city search
  };

  return (
    <div className="container">
      {/* Global Navbar */}
      <Navbar
        city={city}
        setCity={setCity}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        handleSearch={handleSearch}
      />

      {/* Routes */}
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Homepage route */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Menu route, conditional rendering */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Search results for city */}
        {isSearching && city && (
          <Route path="/menu/search" element={<MenuC city={city} />} />
        )}

        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
