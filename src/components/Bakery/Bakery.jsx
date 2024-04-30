export default function Bakery ({ bakery }) {
  return (
      <main>
        <h2>{bakery.name}</h2>
        <p>{bakery.formatted_address}</p>
        <p>{bakery.formatted_phone_number}</p>
        {/* TODO: add other details later */}
      </main>
    );
  };