import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchPage from "./Components/SearchPage";
import FavoritesPage from "./Components/FavoritesPage";

function App() {
  return (

      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/favorites"  element={<FavoritesPage/>} />
      </Routes>
  );
}

export default App;
