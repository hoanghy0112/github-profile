import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "features/search/searchSlice"
import userSlice from "features/user/userSlice"

export default configureStore({
   reducer: {
      search: searchSlice,
      user: userSlice
   }
})
