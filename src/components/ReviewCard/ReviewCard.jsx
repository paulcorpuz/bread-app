import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

export default function ReviewCard({ user, review, bakeryId, fetchBakery}) {
  const [error, setError] = useState("");

  async function handleDeleteReview() {
    try {
      await reviewsAPI.deleteReview(bakeryId, review._id);
      await fetchBakery()
    } catch (error) {
      setError("Failed to delete review. Please try again.");
    }
  }


  return (
    <main>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
      {user && (
        <button onClick={handleDeleteReview}>Delete Review</button>
      )}
      {error && <p>{error}</p>}
    </main>


  );
}

// displaying time without the second
// https://ianio.co.uk/snippets/using-tolocaletimestring-without-displaying-seconds
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// visible
// https://dev.to/craicoverflow/controlling-component-visibility-with-react-hooks-32km