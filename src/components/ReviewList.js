import { useSelector } from "react-redux";
import ReviewCard from "./utils/ReviewCard";



const ReviewList = ({reviews}) => {
    // const allReviews = useSelector((store) => store.review.allReviews);
    // console.log(reviews);
    

    return (
        <div className="p-1 lg:p-5 flex flex-col gap-8 bg-zinc-900">
            {reviews.length ? reviews?.map(review => {
                return <ReviewCard reviewDetail={review} />
            }) : <h1 className="font-normal text-xs lg:text-xl">No review for this movie</h1>}           
        </div>
    );
}

export default ReviewList;