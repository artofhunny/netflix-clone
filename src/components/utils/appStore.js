import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import changeCssReducer from "./changeCssSlice";
import reviewReducer from "./reviewSlice";
import reviewSlice from "./reviewSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            changeCss: changeCssReducer,
            review: reviewReducer, 
        }
    }
);

export default appStore;