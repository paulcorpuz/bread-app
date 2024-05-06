import { useState, useEffect } from "react";
import * as BakeriesApi from '../../utilities/bakeries-api';

import BakeriesGrid from "../../components/BakeriesGrid/BakeriesGrid";

import {
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

export default function BakeriesListPage() {
  const [bakeries, setBakeries] = useState([]);

  useEffect(function() {
    async function getBakeries() {
      try {
        const bakeries = await BakeriesApi.index();
        setBakeries(bakeries);
      } catch (error) {
        console.error('Failed to fetch bakeries', error);
      }
    }
    getBakeries();
  }, []);


  return (
    <main>
        <br />
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          curated by the community
        </Heading>
        <br />

      {
        bakeries.length !== 0 ? 
        <div>
          <BakeriesGrid bakeries={bakeries} setBakeries={setBakeries} />
        </div>
        :
        <h2>no bakeries added yet!</h2>
      }


    </main>
  );
}