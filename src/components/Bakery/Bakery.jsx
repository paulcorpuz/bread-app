
export default function Bakery({ bakery, setBakeries }) {
  return (
    <div className="bakery">
      <h3>{bakery.name}</h3>
      {/* <img
          src={}
          alt={bakery.name}
          className="bakery-photo"
        /> */}
      <p>{bakery.address}</p>
    </div>
  );
}