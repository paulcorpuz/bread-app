import { useState, useEffect } from "react";
import * as BakeriesApi from '../../utilities/bakeries-api';

import BakeriesGrid from "../../components/BakeriesGrid/BakeriesGrid";


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
      <h1>This is the BakeryListPage </h1>
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