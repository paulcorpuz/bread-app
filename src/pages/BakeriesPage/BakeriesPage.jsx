import { useState, useEffect } from 'react';
import { fetchBakeriesFromGoogle } from '../../utilities/bakeries-api';
import BakeriesList from '../../components/BakeriesList/BakeriesList';

export default function BakeriesPage() {
  const [bakeries, setBakeries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchBakeriesFromGoogle(searchQuery);
      setBakeries(data);
    } catch (error) {
      console.error('Error fetching bakeries:', error);
    }
  };

  const handleAddBakery = async (bakery) => {
    try {
      const response = await fetch('/api/bakeries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bakery)
      });
      const addedBakery = await response.json();
      console.log('Bakery added:', addedBakery);
    } catch (error) {
      console.error('Error adding bakery:', error);
    }
  };

  const handleRemoveBakery = async (bakeryId) => {
    try {
      await fetch(`/api/bakeries/${bakeryId}`, {
        method: 'DELETE'
      });
      console.log('Bakery removed:', bakeryId);
      // Optionally, you can remove the bakery from the local state as well
      setBakeries(bakeries.filter(bakery => bakery._id !== bakeryId));
    } catch (error) {
      console.error('Error removing bakery:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []); // Fetch bakeries when component mounts

  return (
    <main>
      <h1>Bakeries in Seattle</h1>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder="Search bakeries..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      < BakeriesList
        bakeries={bakeries}
        onAddBakery={handleAddBakery}
        onRemoveBakery={handleRemoveBakery}
      />
    </main>
  );
}