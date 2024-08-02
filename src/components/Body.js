import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse";
import Login from "./Login";
import VideoTrailor from "./VideoTrailer";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryCongtainer";
import YourReviews from "./YourReviews";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
          path: '/browse',
          element: <Browse />,
          children: [
            {
                path: '/browse',
                element: <div>
                    <MainContainer />
                    <SecondaryContainer />
                </div>
            },
            {
                path: '/browse/trailer/:movieId',
                element: <VideoTrailor />
            },
            {
                path: '/browse/your-reviews',
                element: <YourReviews />
            }
        ]
        },
        
      ]);


    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;