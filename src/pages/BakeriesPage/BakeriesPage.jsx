import React, { useState, useEffect } from 'react';
import Bakery from '../../../components/bakery/Bakery';
import * as bakeriesAPI from '../../../utilities/bakeries-api';

function BakeriesPage() {
  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    async function fetchBakeries() {
      try {
        const data = await bakeriesAPI.fetchBakeriesFromGoogle();
        setBakeries(data);
      } catch (error) {
        console.error('Error fetching bakeries:', error);
      }
    }
    fetchBakeries();
  }, []);

  async function handleSaveBakery(bakeryData) {
    try {
      const savedBakery = await fetch('/api/bakeries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bakeryData)
      });
      console.log('Saved bakery:', savedBakery);
    } catch (error) {
      console.error('Error saving bakery:', error);
    }
  }

  return (
    <div>
      <h1>Bakeries in Seattle</h1>
      {bakeries.map(bakery => (
        <div key={bakery.place_id}>
          <Bakery bakery={bakery} />
          <button onClick={() => handleSaveBakery(bakery)}>Save Bakery</button>
        </div>
      ))}
    </div>
  );
}

export default BakeriesPage;
