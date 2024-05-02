import Bakery from '../Bakery/Bakery'

export default function BakeriesList({ bakeries, setBakeries }) {
  const bakeryList = bakeries.map(bakery => (
    <Bakery key={bakery._id} bakery={bakery} setBakeries={setBakeries} />
  ));

  return (
    <main>
      {bakeryList}
    </main>
  );
}