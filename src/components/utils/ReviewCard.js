const ReviewCard = ({reviewDetail}) => {
    return (
        <div className="border-solid border-b border-zinc-400 p-2 pb-1 sm:pb-3 lg:pb-4">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center text-2xl">
                <img className="w-5 sm:w-8 lg:w-10 rounded-full" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="" />
                <h1 className="text-sm" >{reviewDetail.userName}</h1>
                <p className="text-[9px] sm:text-sm lg:text-sm font-normal opacity-50">{new Date(reviewDetail?.timestamp?.toDate()).toLocaleString()}</p>
            </div>
            <p className="font-normal sm:mt-2 lg:mt-2 text-xs sm:text-lg lg:text-xl">
                {reviewDetail.review_text}
            </p>
        </div>
    );
}

export default ReviewCard;