import React, { useState } from 'react';
import RestaurantData from '../assets/michelin_restaurants.json';

function RestaurantList() {
  const [restaurants] = useState(RestaurantData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="restaurant-list-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Restaurant Count */}
      <div className="restaurant-count">
        {filteredRestaurants.length} restaurant(s) found
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <div className="no-results">No restaurants found</div>
        ) : (
          filteredRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className={`restaurant-item ${selectedRestaurant === restaurant ? 'selected' : ''}`}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="restaurant-header">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                {restaurant.stars && (
                  <div className="restaurant-stars">
                    {'⭐'.repeat(restaurant.stars)}
                  </div>
                )}
              </div>
              
              <div className="restaurant-details">
                {restaurant.cuisine && (
                  <p className="restaurant-cuisine">🍽️ {restaurant.cuisine}</p>
                )}
                {restaurant.location && (
                  <p className="restaurant-location">📍 {restaurant.location}</p>
                )}
                {restaurant.price && (
                  <p className="restaurant-price">💰 {restaurant.price}</p>
                )}
                {restaurant.phone && (
                  <p className="restaurant-phone">📞 {restaurant.phone}</p>
                )}
              </div>

              {restaurant.description && (
                <p className="restaurant-description">{restaurant.description}</p>
              )}
            </div>
          ))
        )}
      </div>

      {/* Selected Restaurant Details (Optional Modal/Expanded View) */}
      {selectedRestaurant && (
        <div className="selected-restaurant-modal" onClick={() => setSelectedRestaurant(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedRestaurant(null)}>×</button>
            <h2>{selectedRestaurant.name}</h2>
            {selectedRestaurant.stars && (
              <div className="modal-stars">{'⭐'.repeat(selectedRestaurant.stars)}</div>
            )}
            <div className="modal-details">
              {selectedRestaurant.cuisine && <p><strong>Cuisine:</strong> {selectedRestaurant.cuisine}</p>}
              {selectedRestaurant.location && <p><strong>Location:</strong> {selectedRestaurant.location}</p>}
              {selectedRestaurant.price && <p><strong>Price:</strong> {selectedRestaurant.price}</p>}
              {selectedRestaurant.phone && <p><strong>Phone:</strong> {selectedRestaurant.phone}</p>}
              {selectedRestaurant.website && (
                <p><strong>Website:</strong> <a href={selectedRestaurant.website} target="_blank" rel="noopener noreferrer">{selectedRestaurant.website}</a></p>
              )}
            </div>
            {selectedRestaurant.description && (
              <div className="modal-description">
                <h4>Description</h4>
                <p>{selectedRestaurant.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RestaurantList;