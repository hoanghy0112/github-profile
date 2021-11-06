import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchUser as fetchUserAPI } from "api/fetchUser"


export const fetchUser = createAsyncThunk("search/fetchUser", async () => {
   const response = await fetchUserAPI("hoanghy0112")
   return response
})

const searchSlice = createSlice({
   name: "search",
   initialState: {
      error: null,
      keyword: "",
      result: [],
   },
   reducers: {
      search: (state, action) => {
         state.keyword = action.payload
      },
   },
   extraReducers: {
      [fetchUser.fulfilled]: (state, action) => {
         state.error = null
         state.result = action.payload
      },
      [fetchUser.rejected]: (state, action) => {
         state.error = action.paylaod
         state.result = null
      },
   },
})

export const { search } = searchSlice.actions

export const usersSelector = state => state.search.result.map(user => user.username)

export default searchSlice.reducer
