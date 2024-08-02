import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        allReviews: [],
    },
    reducers: {
        addReview(state, action){
            state.allReviews.push(action.payload);
        },
        SetReview(state, action){
            state.allReviews = action.payload;
        }
    }
});

export const { addReview, SetReview } = reviewSlice.actions;
export default reviewSlice.reducer;
