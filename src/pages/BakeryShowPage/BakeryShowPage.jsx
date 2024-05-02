import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as BakeriesApi from "../../utilities/bakeries-api";

export default function BakeryShowPage() {
  const [bakery, setBakery] = useState(null);
  const { id } = useParams();

  useEffect(function() {
    async function getBakery() {
      try {
        const bakeryData = await BakeriesApi.show(id);
        setBakery(bakeryData);
      } catch (error) {
        console.error("Failed to fetch bakery details", error);
      }
    }
    getBakery();
  }, [id]);


  return (
    <div>
      {bakery && (
        <>
          <h1>{bakery.name}</h1>
          <h2>Address: {bakery.address}</h2>
          {/* TODO: Add more bakery details once search is working again? */}
        </>
      )}
    </div>
  );
}


// https://reactrouter.com/en/main/hooks/use-params

// useEffect = side effects, 2 parameters, function and array of dependencies
// fetches bakery data using BakeriesApi.show (from util) when the component mounts 
// or when the id (use params) changes