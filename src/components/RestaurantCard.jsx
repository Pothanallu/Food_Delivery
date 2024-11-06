import React from "react";
import PropTypes from "prop-types";
import "../styles/RestaurantCard.css";


const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="restaurant-card" onClick={onClick}>
      <img
        src={`/images/${restaurant.image}`} // Ensure images are in /public/images/
        alt={restaurant.name}
      />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <button>View Menu</button>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // Ensure image is part of the data
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RestaurantCard;
