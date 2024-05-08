
import BakeryCard from '../BakeryCard/BakeryCard'

import {SimpleGrid,} from '@chakra-ui/react'


export default function BakeriesGrid({ bakeries, setBakeries }) {

  return (
    <main>

<SimpleGrid columns={2} spacing={2} minChildWidth='400px'>
  {bakeries.map((bakery) => (
    <BakeryCard key={bakery._id} bakery={bakery} setBakeries={setBakeries} />
  ))}
</SimpleGrid>

    </main>
  );
}
