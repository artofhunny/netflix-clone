import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./utils/firebase";
import { useSelector } from "react-redux";
import WishlistBox from "./WishlistBox";
import Header from "./Header";
import Body from "./Body";

const WishList = () => {

    const [wishlist, setWishlist] = useState([]);
    const userDetails = useSelector((store) => store?.user);

    

    useEffect(() => {
        // if (userDetails === null) return;
    
        if(userDetails !== null){
                const watchlistRef = collection(db, 'Watchlist', userDetails.uid, 'watchlistId');
                const q = query(watchlistRef);
                const unsubscribe = onSnapshot(q, (snapshot) => {
                const watchlistData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setWishlist(watchlistData);
            });
            return () => unsubscribe();
        }
    
      }, [userDetails]);

    //   console.log(wishlist[0].movie_id);

    return userDetails === null? <h1>Loading...</h1> : (
        <div className="bg-black text-white min-h-screen ">
            <div className="pb-20">
                <Header />
            </div>
            
            <div className="py-4 px-2 sm:py-6 sm:px-8 lg:py-8 lg:px-10  bg-zinc-950 rounded-md">
                <h1 className="text-lg sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-4 lg:mb-10">My Wishlist</h1>
                <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-4 justify-center mt-2">
                    {wishlist.map(movie => {
                        return <WishlistBox key={movie.id} movieDetail={movie} />
                    })}
                </div>
            </div>
      </div>
    );
}

export default WishList;