import { useState, useEffect } from "react";
import * as BakeriesApi from '../../utilities/bakeries-api';

import BakeriesList from "../../components/BakeriesList/BakeriesList";


export default function BakeriesPage() {
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
      <h1>This is the Bakery Page </h1>
      {
        bakeries.length !== 0 ? 
        <div>
          <BakeriesList bakeries={bakeries} setBakeries={setBakeries} />
        </div>
        :
        <h2>no Bakeries added yet!</h2>
      }
    </main>
  );
}