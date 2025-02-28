import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usePostApi from "../../service/PostApiService.js";

const api = usePostApi()

export const fetchPosts = createAsyncThunk(
    "post/fetchPosts",
    async () => {
        return (await api.getPosts()).data
    }
)

export const fetchPostDetails = createAsyncThunk(
    "post/fetchPostDetails",
    async (id) => {
        return (await api.getPost(id)).data
    }
)


export const addPost = createAsyncThunk(
    "post/addPost",
    async (post) => {
        return (await api.addPost(post)).data
    }
)

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        details: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
            .addCase(fetchPostDetails.pending, (state) => {
                state.isLoading = true
            }
            )
            .addCase(fetchPostDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.details = state.posts.find(post => post.id === action.payload.id)
            })
            .addCase(fetchPostDetails.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
            .addCase(addPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.posts.push(action.payload)
            })
            .addCase(addPost.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })

    }
})

export const { } = postSlice.actions;

export default postSlice.reducer;