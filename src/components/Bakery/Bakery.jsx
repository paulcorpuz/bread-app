import React from 'react';

function Bakery({ bakery }) {
  return (
    <div>
      <h2>{bakery.name}</h2>
      <p>{bakery.formatted_address}</p>
      <p>{bakery.formatted_phone_number}</p>
      {/* Add more bakery information here */}
    </div>
  );
}

export default Bakery;