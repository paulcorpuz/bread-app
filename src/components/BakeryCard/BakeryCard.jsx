import { useState } from "react";
import * as bakeriesAPI from "../../utilities/bakeries-api";

export default function BakeryCard({ bakery }) {
  const [error, setError] = useState('');

  async function handleSubmitBakery() {
    try {
      await bakeriesAPI.create(bakery);
      console.log('Bakery saved successfully');
    } catch {
      setError('Failed to Save Bakery - Please Try Again');
    }
  }

  return (
    <main>
      {/* FIXME: */}
      {/* {bakery.photos && bakery.photos.length > 0 && (
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${bakery.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`}
          alt={bakery.name}
          className="bakery-photo"
        />
      )} */}
      <div>
        <h1>{bakery.name}</h1>
        {bakery.formatted_address && <h3>Address: {bakery.formatted_address}</h3>}
        {bakery.formatted_phone_number && <h3>Phone: {bakery.formatted_phone_number}</h3>}
      </div>
      <button onClick={handleSubmitBakery}>Save Bakery</button>
      {error && <p>{error}</p>}
    </main>
  );
}






// {bakery.formatted_address && <p>Address: {bakery.formatted_address}</p>} 
// react conditional rendering renders the address 
// only if bakery.formatted_address exists and is truthy. Otherwise, it doesn't render anything.