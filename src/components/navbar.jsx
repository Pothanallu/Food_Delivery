import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import MenuC from "../components/MenuC"; // Import MenuC for city-based menu

function Navbar({ city, setCity, isSearching, setIsSearching }) {
  // Handle city search
  const handleSearch = (e) => {
    const value = e.target.value;
    setCity(value);  // Update city state as user types
    setIsSearching(!!value);  // Toggle isSearching based on input presence
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Food Delivery</h2>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
        </ul>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search city (e.g., Hyderabad, Vijayawada)"
            className="search-input"
            value={city}
            onChange={handleSearch}
          />
          <button className="search-button" onClick={() => setIsSearching(!!city)}>Search</button>
        </div>
      </nav>

      {/* Only show MenuC if there is a search query */}
      {isSearching && city && <MenuC city={city} />}
    </div>
  );
}

export default Navbar;
