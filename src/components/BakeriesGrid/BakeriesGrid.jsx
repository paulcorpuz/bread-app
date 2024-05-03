import BakeryCard from '../BakeryCard/BakeryCard'

export default function BakeriesGrid({ bakeries, setBakeries }) {
  return (
    <main>
      {bakeries.map(function(bakery) {
        return <BakeryCard key={bakery._id} bakery={bakery} setBakeries={setBakeries} />;
      })}


    </main>
  );
}
