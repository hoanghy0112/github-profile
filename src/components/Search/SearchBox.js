import React from "react"
import { useDispatch } from "react-redux"

import { fetchUser, toggleSearchResultBoxOn } from "features/search/searchSlice"
import './SearchBox.sass'

const SearchBox = React.memo(function () {
   const [searchValue, setSearchValue] = React.useState("")
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchUser(searchValue))
   }, [])

   const handleSearch = () => {
      dispatch(fetchUser(searchValue))
      dispatch(toggleSearchResultBoxOn())
   }

   const handleChange = (event) => {
      setSearchValue(event.target.value)
      dispatch(toggleSearchResultBoxOn())
   }

   return (
      <div className="search-box">
         <input
            value={searchValue}
            onChange={handleChange}
            onKeyPress={(event) => {
               if (event.code === 'Enter') handleSearch(searchValue)
            }}
            onFocus={() => dispatch(toggleSearchResultBoxOn())}
            type="text"
            placeholder="Search Github username..."
         />
         <button onClick={handleSearch} type="submit">
            Search
         </button>
      </div>
   )
})

export default SearchBox