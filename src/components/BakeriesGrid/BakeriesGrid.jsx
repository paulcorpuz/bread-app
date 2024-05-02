import BakeryCard from '../BakeryCard/BakeryCard'

export default function BakeriesGrid({ bakeries, setBakeries }) {
  const bakeryList = bakeries.map(function(bakery) {
    return <BakeryCard key={bakery._id} bakery={bakery} setBakeries={setBakeries} />;
  });

  return (
    <main>
      {bakeryList}
    </main>
  );
}