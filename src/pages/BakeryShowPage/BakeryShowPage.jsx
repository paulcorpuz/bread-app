import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as bakeriesApi from "../../utilities/bakeries-api";

import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

export default function BakeryShowPage() {
  const [bakery, setBakery] = useState(null)
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const user = getUser()

  
  //getting Bakery info
  async function fetchBakery() {
    try {
      const bakeryData = await bakeriesApi.show(id);
      setBakery(bakeryData);
      setReviews(bakeryData.reviews);
      console.log(bakeryData.reviews)
    } catch (error) {
      console.error("Failed to fetch bakery details", error);
    }
  }

  //getting Bakery info
  useEffect(function () {
    fetchBakery();
  }, [id]);


  return (
    <main>
      {bakery ? (
        <>
          <h1>{bakery.name}</h1>
          <h2>Address: {bakery.address}</h2>
          <h2>Rating: {bakery.rating}</h2>
          {user && (
            <>
              <hr />
              <ReviewForm user={user} bakeryId={bakery._id} fetchBakery={fetchBakery} />
              <hr />
            </>
          )}
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              bakeryId={bakery._id}
              review={review}
              user={user}
              fetchBakery={fetchBakery}
            />
          ))}
        </>
      ) : (
        <p>Loading!</p>
      )}


    </main>
  );
}












// https://reactrouter.com/en/main/hooks/use-params

// useEffect = side effects, 2 parameters, function and array of dependencies
// fetches bakery data using BakeriesApi.show (from util) when the component mounts 
// or when the id (use params) changes