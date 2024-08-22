import { useEffect, useState } from "react";
import ReviewBox from "./ReviewBox";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "./utils/firebase";
import Body from "./Body";
import Header from "./Header";

const YourReviews = () => {
  const [reviews, setReviews] = useState([]); // Dummy review data for testing

  const userDetails = useSelector((store) => store?.user);


  useEffect(() => {
    // if (!movieId) return;

    if(userDetails !== null){
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
    }
    
  }, [userDetails]);

//   console.log(reviews);


  return !userDetails? <h1>Loading... </h1> : (
    <div className=" min-h-screen bg-gray-900 text-white">
      <div className="pb-12 sm:pb-14 lg:pb-20">
                <Header />
      </div>
      
      <div className="px-2 sm:px-8 lg:px14 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">Your Reviews</h1>
        {reviews.length === 0 ? (
          <p className="text-lg">No reviews yet. Be the first to review this movie!</p>
        ) : (
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5">
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
