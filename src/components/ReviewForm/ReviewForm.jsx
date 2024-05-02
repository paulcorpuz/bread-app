import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

export default function ReviewForm({ bakeryId, onReviewCreated }) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  // Handle input change
  function handleChange(evt) {
    const { value } = evt.target;
    setContent(value);
    setError('');
  }

  // Handle form submission
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newReview = await reviewsAPI.create(bakeryId, { content, rating });
      onReviewCreated(newReview);
      setContent("");
      setRating(0);
    } catch (error) {
      console.error("Failed to create review", error);
      setError('Failed to create review. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Write a review..."
      ></textarea>
      <select value={rating} onChange={(evt) => setRating(parseInt(evt.target.value))}>
        <option value={0}>Select Rating</option>
        <option value={1}>1 Star</option>
        <option value={2}>2 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={5}>5 Stars</option>
      </select>
      <button type="submit">Submit Review</button>
      {error && <p>{error}</p>}
    </form>
  );
}
