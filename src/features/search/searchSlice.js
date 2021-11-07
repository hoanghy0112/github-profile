import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser as fetchUserAPI } from 'api/fetchUser'


const setKeyword = keyword => localStorage.setItem('keyword', keyword)
const getKeyword = () => localStorage.getItem('keyword') || ''

export const fetchUser = createAsyncThunk(
   'search/fetchUser',
   async (keyword) => {
         const response = await fetchUserAPI(keyword)
   
         return response
   },
)

const searchSlice = createSlice({
   name: 'search',
   initialState: {
      error: null,
      keyword: getKeyword(),
      searchResultBox: false,
      result: [],
   },
   reducers: {
      search: (state, action) => {
         state.keyword = action.payload
      },
      toggleSearchResultBox: (state) => {
         state.searchResultBox = !state.searchResultBox
      },
      toggleSearchResultBoxOn: (state) => {
         state.searchResultBox = true
      },
      toggleSearchResultBoxOff: (state) => {
         state.searchResultBox = false
      },
   },
   extraReducers: {
      [fetchUser.fulfilled]: (state, action) => {
         state.error = null
         state.result = action.payload
      },
      [fetchUser.rejected]: (state, action) => {
         state.error = action.payload
      },
   },
})

export const {
   search,
   toggleSearchResultBox,
   toggleSearchResultBoxOn,
   toggleSearchResultBoxOff,
} = searchSlice.actions

export const usersSelector = (state) => state.search.result
export const searchResultBoxSelector = (state) => state.search.searchResultBox

export default searchSlice.reducer
