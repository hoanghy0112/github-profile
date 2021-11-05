import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchUser } from "features/search/searchSlice"

export default React.memo(function () {
   const [searchValue, setSearchValue] = React.useState("")
   const dispatch = useDispatch()

   const handleSearch = (event) => {
      dispatch(fetchUser(searchValue))
   }

   const handleChange = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <div className="search-box">
         <input
            value={searchValue}
            onChange={handleChange}
            type="text"
            placeholder="Search Github username..."
         />
         <button onClick={handleSearch} type="submit">
            Search
         </button>
      </div>
   )
})
