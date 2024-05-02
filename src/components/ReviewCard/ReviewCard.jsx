import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

// --> takes prop from ReviewsGrid (reviews, setReviews)
export default function Note({ review, reviews, setReviews }) {
  const [error, setError] = useState('')

  const date = new Date(review.createdAt)


  // Delete note
  async function handleDeleteReview() {
    try {
      await reviewsAPI.deleteReview(review._id);
      setReviews(reviews.filter(function (r) { // Remove the deleted note from the notes array
        return r._id !== review._id;
      })
      );
      
    } catch (error) {
      setError('Failed to delete review. Please try again.');
    }
  }


  return (
    <main className="form-container">
      <h1>Review Component</h1>
      <h2>
        {date.toLocaleString([], {
          // dateStyle: 'medium',
          // timeStyle: 'long',
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
          hour12: true,
        })}
      </h2>
      <button onClick={handleDeleteReview}>Delete Review</button>
      {error && <p>{error}</p>}
    </main>
  );
}


// displaying time without the second
// https://ianio.co.uk/snippets/using-tolocaletimestring-without-displaying-seconds
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// visible
// https://dev.to/craicoverflow/controlling-component-visibility-with-react-hooks-32km