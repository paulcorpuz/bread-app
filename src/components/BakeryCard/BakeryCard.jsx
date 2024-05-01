import React from 'react';

export default function BakeryCard({ bakery }) {
  return (
    <div>
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
    </div>
  );
}


// {bakery.formatted_address && <p>Address: {bakery.formatted_address}</p>} 
// react conditional rendering renders the address 
// only if bakery.formatted_address exists and is truthy. Otherwise, it doesn't render anything.