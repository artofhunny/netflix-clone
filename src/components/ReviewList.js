import { useSelector } from "react-redux";
import ReviewCard from "./utils/ReviewCard";



const ReviewList = ({reviews}) => {
    // const allReviews = useSelector((store) => store.review.allReviews);
    // console.log(reviews);
    

    return (
        <div className="w-[550px] min-w-[550px] p-5 flex flex-col gap-8 bg-zinc-900">
            {reviews.length ? reviews?.map(review => {
                return <ReviewCard reviewDetail={review} />
            }) : <h1>No review for this movie</h1>}           
        </div>
    );
}

export default ReviewList;