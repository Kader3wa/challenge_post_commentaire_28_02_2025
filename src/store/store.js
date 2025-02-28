import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./feature/postSlice";
import userSlice from "./feature/userSlice";
import commentSlice from "./feature/commentSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        user: userSlice,
        comments: commentSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([])
})

export default store