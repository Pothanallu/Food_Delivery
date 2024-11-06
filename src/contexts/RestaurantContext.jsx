import React, { createContext, useState, useEffect } from "react";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Mock data with Indian restaurant names and images
  useEffect(() => {
    setRestaurants([
      { id: 1, name: "Biryani House", cuisine: "Indian", image: "biryani_house.jpg" },
      { id: 2, name: "Sagar Ratna", cuisine: "South Indian", image: "sagar_ratna.jpg" },
      { id: 3, name: "Punjab Grill", cuisine: "North Indian", image: "punjab_grill.jpg" },
      { id: 4, name: "Barbeque Nation", cuisine: "Indian", image: "barbeque_nation.jpg" },
      { id: 5, name: "Indian Accent", cuisine: "Contemporary Indian", image: "indian_accent.jpg" },
    ]);
  }, []);

  const handleAddItems = (dish) => {
    // Your existing handleAddItems code here
  };

  const handleRemoveItems = (dish) => {
    // Your existing handleRemoveItems code here
  };

  const emptyCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const value = {
    restaurants,
    selectedRestaurant,
    setSelectedRestaurant,
    cartItems,
    handleAddItems,
    handleRemoveItems,
    totalPrice,
    emptyCart,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantContext, RestaurantProvider };
