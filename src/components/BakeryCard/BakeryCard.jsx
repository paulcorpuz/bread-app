import { Link } from "react-router-dom";
import "./BakeryCard.css";

export default function BakeryCard({ bakery }) {
  return (
    <main className="BakeryCard">
      <Link to={`/bakeries/${bakery._id}`}>
        <h3>{bakery.name}</h3>
      </Link>
      <p>{bakery.address}</p>


    </main>
  );
}