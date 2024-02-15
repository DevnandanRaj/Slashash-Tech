import React, { useState } from 'react';
import axios from 'axios';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = "c2c92a8d";
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
      console.log('Response Data:', response.data);
      setError(null);

      if (response.data.Search) {
        setSearchResults(response.data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchResults([]);
      setError('An error occurred while searching. Please try again.');
    }
  };

  const saveFavorite = async (title, year, type, poster) => {
    try {
      await axios.post('http://localhost:8080/favorites/add', { title, year, type, poster });
      alert('Favorite saved successfully');
    } catch (error) {
      console.error('Error saving favorite:', error);
      alert('Failed to save favorite');
    }
  };

  return (
    <div className="SearchPage" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Search for a Movie or TV Show</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter movie or TV show title"
          style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
      </div>

      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {searchResults.map((result) => (
          <div key={result.imdbID} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={result.Poster} alt={result.Title} style={{ width: '100%', marginBottom: '10px' }} />
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>Title: {result.Title}</p>
            <p style={{ marginBottom: '5px' }}>Year: {result.Year}</p>
            <p style={{ marginBottom: '5px' }}>Type: {result.Type}</p>
            <button onClick={() => saveFavorite(result.Title, result.Year, result.Type, result.Poster)} style={{ padding: '8px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Save Favorite
            </button>
          </div>
        ))}
      </div>

     <button onClick={() => window.location.href = '/favorites'} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Go to Favorites</button>

    </div>
  );
}

export default SearchPage;
