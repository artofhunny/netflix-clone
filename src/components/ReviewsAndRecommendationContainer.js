import RecommendationContainer from "./RecommendationContainer";
import UserReviews from "./UserReviews";

const ReviewsAndRecommendationContainer = ({movieId, setIde}) => {
    return (
        <section className="flex flex-wrap sm:flex-nowrap sm:px-6 lg:flex-nowrap lg:px-10 gap-4 sm:gap-6 lg:gap-10 items-start">
            <UserReviews />
            <RecommendationContainer id={movieId} />
        </section>
    );
}

export default ReviewsAndRecommendationContainer;