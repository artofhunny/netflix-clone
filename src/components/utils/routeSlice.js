import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: "routeSlice",
    initialState: null,
    reducers: {
        addCurrentRoute(state, action){
            return action.payload;
        }
    }
});

export const { addCurrentRoute } = routeSlice.actions;
export default routeSlice.reducer;