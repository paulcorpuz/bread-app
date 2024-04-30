import Bakery from '../Bakery/Bakery';

export default function BakeriesList ({ bakeries, onAddBakery, onRemoveBakery }) {
  return (
    <div>
      {bakeries.map((bakery) => (
        <div key={bakery.place_id}>
          <Bakery bakery={bakery} />
          <button onClick={() => onAddBakery(bakery)}>Add Bakery</button>
          <button onClick={() => onRemoveBakery(bakery._id)}>Remove Bakery</button>
        </div>
      ))}
    </div>
  );
};
