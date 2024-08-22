import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import MainContainer from "./components/MainContainer";
import SecondaryContainer from "./components/SecondaryCongtainer";
import VideoTrailor from "./components/VideoTrailer";
import YourReviews from "./components/YourReviews";
import WishList from "./components/WishList";

function App() {

  

  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;







                                                      


