import React, { useState } from 'react';
import { searchBakeries } from '../../utilities/bakeries-api';
import SearchCard from '../SearchCard/SearchCard';

export default function SearchGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async function() {
    try {
      const location = 'Seattle, WA';
      const radius = 50000; // radius in meters
      const results = await searchBakeries(searchQuery, location, radius);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching bakeries:', error);
    }
  };

  return (
    <main>
      <input
        type="text"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
        placeholder="Search bakeries"
      />
      <button onClick={handleSearch}>Search</button>

      {/* style? */}
      <div>
        {searchResults.map((bakery) => (
          <SearchCard key={bakery.place_id} bakery={bakery} />
        ))}
      </div>
    </main>
  );
}