import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useUserApi from "../../service/UserApiService.js"

const api = useUserApi()

export const fetchUserDetails = createAsyncThunk(
    "user/fetchUserDetails",
    async (id) => {
        return (await api.getUser(id)).data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetail: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.userDetail = action.payload
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }
})

export const { } = userSlice.actions;

export default userSlice.reducer;