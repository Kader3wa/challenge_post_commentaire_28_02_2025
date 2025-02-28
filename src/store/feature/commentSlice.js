import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useCommentApi from "../../service/CommentApiService";

const api = useCommentApi();

export const fetctPostComments = createAsyncThunk(
    "commentaire/fetchPostComments",
    async (postId) => {
        return (await api.getCommentsPost(postId)).data
    }
)

export const addComment = createAsyncThunk(
    "commentaire/addComment",
    async (comment) => {
        return (await api.addComment(comment)).data
    }
)

const commentSlice = createSlice({
    name: "comment",
    initialState: {
        comments: [],

        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetctPostComments.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetctPostComments.fulfilled, (state, action) => {
                state.isLoading = false
                state.comments = action.payload
            })
            .addCase(fetctPostComments.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.comments.push(action.payload)
            })
            .addCase(addComment.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }
})

export const { } = commentSlice.actions;

export default commentSlice.reducer;