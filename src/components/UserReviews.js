import { useDispatch, useSelector } from "react-redux";
import ReviewList from "./ReviewList";
import { useEffect, useRef, useState } from "react";
import { addReview } from "./utils/reviewSlice";
import { db } from "./utils/firebase";
import { doc, setDoc, serverTimestamp, collection, query, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';  // Import uuid for unique IDs

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

const UserReviews = () => {
    const [showInput, setShowInput] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const reviewText = useRef(null);
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const userDetails = useSelector((store) => store?.user);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        const reviewsRef = collection(db, 'movies', movieId, 'reviews');
        const q = query(reviewsRef);
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(reviewsData);
        });

        return () => unsubscribe();
    }, [movieId]);

    const submitReviewToFirestore = async (reviewData, reviewId) => {
        const movieReviewPath = doc(db, 'movies', movieId, 'reviews', reviewId);
        const userReviewPath = doc(db, 'Reviews', userDetails.uid, 'review', reviewId);

        try {
            await setDoc(movieReviewPath, reviewData);
            await setDoc(userReviewPath, { ...reviewData, movie_id: movieId });
            console.log('Review submitted successfully!');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const reviewTextValue = reviewText.current.value.trim();
        if (!reviewTextValue) {
            console.error('Review text is empty');
            setIsSubmitting(false);
            return;
        }

        const reviewId = uuidv4();  // Generate unique ID for each review

        if (!userDetails?.uid) {
            console.error('User is not authenticated');
            setIsSubmitting(false);
            return;
        }

        const reviewData = {
            user_id: userDetails.uid,
            review_text: reviewTextValue,
            userName: userDetails.displayName,
            timestamp: serverTimestamp()
        };

        dispatch(addReview({ reviewText: reviewTextValue, name: userDetails.displayName }));

        await submitReviewToFirestore(reviewData, reviewId);

        reviewText.current.value = '';
        setShowInput(false);
        setIsSubmitting(false);
    };

    const handleAddReview = () => {
        setShowInput(true);
    };

    return (
        <div className="w-full sm:w-[340px] sm:min-w-[340px]  lg:w-[520px] lg:min-w-[520px] px-2 lg:px-5 bg-black">
            <h1 className="text-md sm:text-2xl lg:text-4xl mt-2 bg-black py-1 sm:px-2 sm:py-2 lg:px-3 lg:py-3">User Reviews</h1>

            <ReviewList reviews={reviews} />

            <div className="py-2 sm:px-2 sm:py-2 lg:px-3 lg:py-3 bg-black">
                {!showInput && (
                    <div onClick={handleAddReview} className="inline-flex items-center gap-1 px-2 py-1 text-xs font-normal sm:text-lg sm:py-1 sm:px-2 lg:text-xl lg:py-2 lg:px-4 cursor-pointer rounded-md bg-zinc-900">
                        <span className="material-symbols-outlined font-normal text-xs sm:text-lg lg:text-xl">add</span>
                        <span>Add Review</span>
                    </div>
                )}

                {showInput && (
                    <form className="mt-6 bg-black" onSubmit={handleSubmitReview}>
                        <textarea ref={reviewText} className="resize-none font-semibold mb-2 rounded-md bg-zinc-300 w-full h-20 text-black"></textarea>
                        <button type="submit" className="py-2 px-4 cursor-pointer rounded-md bg-zinc-900" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UserReviews;
