import React from "react"
import { useDispatch } from "react-redux"

import { fetchUser } from "features/search/searchSlice"

export default React.memo(function () {
   const [searchValue, setSearchValue] = React.useState("")
   const dispatch = useDispatch()

   const handleSearch = () => {
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
            onKeyPress={(event) => {
               if (event.code === 'Event') handleSearch(searchValue)
            }}
            type="text"
            placeholder="Search Github username..."
         />
         <button onClick={handleSearch} type="submit">
            Search
         </button>
      </div>
   )
})
