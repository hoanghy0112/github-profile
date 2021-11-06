import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchUserDetail as fetchUserDetailAPI } from "api/fetchUser";


export const fetchUserDetail = createAsyncThunk('user/fetchUserDetail', async (username) => {
   const data = await fetchUserDetailAPI(username)
   return data
})

const userSlice = createSlice({
   name: 'user',
   initialState: {
      status: 'none', //? none | finished
   },
   extraReducers: {
      [fetchUserDetail.fulfilled]: (state, action) => {
         const newState = {
            ...state,
            status: 'finished',
            username: action.payload.login,
            id: action.payload.id,
            avatar: action.payload.avatar_url,
            name: action.payload.name,
            location: action.payload.location,
            repos: action.payload.public_repos,
         }
         return newState
      }
   }
})

export const userInfoSelector = state => state.user

export default userSlice.reducer