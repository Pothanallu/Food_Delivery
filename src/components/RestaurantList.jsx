import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../contexts/RestaurantContext";
import "../styles/RestaurantList.css"; // Ensure the correct path

const RestaurantList = () => {
  const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="restaurant-list">
      {restaurants && restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleRestaurantClick(restaurant)}
          />
        ))
      ) : (
        <p>No restaurants available.</p>
      )}
    </div>
  );
};

export default RestaurantList;
