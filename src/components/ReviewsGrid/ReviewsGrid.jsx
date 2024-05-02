import ReviewCard from "../ReviewCard/ReviewCard";


// --> takes prop from ReviewsPage (reviews, setReviews)
export default function ReviewsGrid({ reviews, setReviews }) {

  return (
    <main>
      <h1>ReviewsGrid Component</h1>
      {reviews.map(review => (
        <ReviewCard reviews={reviews} setReviews={setReviews} review={review} key={review._id} />
      ))}
    </main>
  );
}