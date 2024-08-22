import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Browse from "./Browse";
import Login from "./Login";
import VideoTrailor from "./VideoTrailer";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryCongtainer";
import YourReviews from "./YourReviews";
import WishList from "./WishList";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

const Body = ({route}) => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
        path: '/trailer/:movieId',
        element: <VideoTrailor />
    },
    {
        path: '/your-reviews',
        element: <YourReviews />
    },
    {
        path: '/wishlist',
        element: <WishList />
    }
  ]);

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties

              // https://firebase.google.com/docs/reference/js/auth.user
              const{ uid, displayName, email } = user;
              dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
            //   navigate("/browse");
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
            }
        });
      }, []);


    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;