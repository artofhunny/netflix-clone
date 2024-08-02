const ReviewCard = ({reviewDetail}) => {
    return (
        <div className="border-solid border-b border-zinc-400 pb-4">
            <div className="flex gap-4 items-center text-2xl">
                <img className="w-10 rounded-full" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="" />
                <h1>{reviewDetail.userName}</h1>
                <p className="text-sm font-normal opacity-50">{new Date(reviewDetail?.timestamp?.toDate()).toLocaleString()}</p>
            </div>
            <p className="font-normal mt-2">
                {reviewDetail.review_text}
            </p>
        </div>
    );
}

export default ReviewCard;