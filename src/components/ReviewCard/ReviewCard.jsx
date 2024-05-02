import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

export default function ReviewCard({ review, bakeryId, onReviewDeleted }) {
  const [error, setError] = useState("");

  async function handleDeleteReview() {
    try {
      await reviewsAPI.deleteReview(bakeryId, review._id);
      onReviewDeleted(review._id);
    } catch (error) {
      setError("Failed to delete review. Please try again.");
    }
  }

  return (
    <div>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
      <button onClick={handleDeleteReview}>Delete Review</button>
      {error && <p>{error}</p>}
    </div>
  );
}

// displaying time without the second
// https://ianio.co.uk/snippets/using-tolocaletimestring-without-displaying-seconds
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// visible
// https://dev.to/craicoverflow/controlling-component-visibility-with-react-hooks-32km