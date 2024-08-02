import RecommendationContainer from "./RecommendationContainer";
import UserReviews from "./UserReviews";

const ReviewsAndRecommendationContainer = ({movieId, setIde}) => {
    return (
        <section className="flex px-10 gap-10 items-start">
            <UserReviews />
            <RecommendationContainer id={movieId} />
        </section>
    );
}

export default ReviewsAndRecommendationContainer;