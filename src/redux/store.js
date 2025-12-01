import { configureStore } from "@reduxjs/toolkit";
import proposalReducer from "./proposalSlice";

export const store = configureStore({
    reducer: {
        proposal: proposalReducer
    }
});