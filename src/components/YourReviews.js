import { useEffect, useState } from "react";
import ReviewBox from "./ReviewBox";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "./utils/firebase";

const YourReviews = () => {
  const [reviews, setReviews] = useState([]); // Dummy review data for testing

  const userDetails = useSelector((store) => store?.user);


  useEffect(() => {
    // if (!movieId) return;

    const reviewsRef = collection(db, 'Reviews', userDetails.uid, 'review');
    const q = query(reviewsRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const reviewsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setReviews(reviewsData);
    });

    return () => unsubscribe();
  }, []);

//   console.log(reviews);


  return !reviews? <h1>Loading...</h1> : (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">User Reviews</h1>
        {reviews.length === 0 ? (
          <p className="text-lg">No reviews yet. Be the first to review this movie!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map(review => (
              <ReviewBox key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourReviews;
