import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:8080/favorites/get');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div className="FavoritesPage" style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>My Favorites</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favorites.map((favorite) => (
          <div key={favorite.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={favorite.poster} alt={favorite.title} style={{ maxWidth: '200px', maxHeight: '300px' }} />
            <p>Title: {favorite.title}</p>
            <p>Year: {favorite.year}</p>
            <p>Type: {favorite.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
