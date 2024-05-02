import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as bakeriesApi from "../../utilities/bakeries-api";

// import ReviewAddForm from "../../components/ReviewAddForm/ReviewAddForm";
import ReviewsGrid from "../../components/ReviewsGrid/ReviewsGrid";


export default function BakeryShowPage() {
  const [bakery, setBakery] = useState(null);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);


  //getting Bakery info
  useEffect(function() {
    async function getBakery() {
      try {
        const bakeryData = await bakeriesApi.show(id);
        setBakery(bakeryData);
      } catch (error) {
        console.error("Failed to fetch bakery details", error);
      }
    }
    getBakery();
  }, [id]);


  // getting Review info
  useEffect(function() {
    async function getReviews() {
      const reviews = await bakeriesApi.index();
      setReviews(reviews);
    }
    
    getReviews()
  }, []);

  

  return (
    <main>
      <>
        {bakery ? (
          <>
            <h1>{bakery.name}</h1>
            <h2>Address: {bakery.address}</h2>
            <h2>Rating: {bakery.rating}</h2>
            {/* TODO: Add more bakery details */}
          </>
        ) : (
          <p>Loading...</p>
        )}

      </>
      
      <hr />
      <>
        <h1>Reviews Header</h1>
        {
          reviews.length !== 0 ?
            <div>
              <ReviewsGrid reviews={reviews} setReviews={setReviews} />
            </div>
            :
            <h2>No Reviews Yet!</h2>
        }
      </>

    </main>






  );
}













// https://reactrouter.com/en/main/hooks/use-params

// useEffect = side effects, 2 parameters, function and array of dependencies
// fetches bakery data using BakeriesApi.show (from util) when the component mounts 
// or when the id (use params) changes