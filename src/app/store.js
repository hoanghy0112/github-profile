import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "features/search/searchSlice"

export default configureStore({
   reducer: {
      search: searchSlice,
   }
})
