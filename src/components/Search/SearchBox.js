import React from "react"
import { useDispatch } from "react-redux"

import { fetchUser, toggleSearchResultBoxOn } from "features/search/searchSlice"
import './SearchBox.sass'

import useLocalStorageState from "hooks/useLocalStorageState"


const SearchBox = React.memo(function () {
   const [searchValue, setSearchValue] = useLocalStorageState('search-keyword')
   const dispatch = useDispatch()

   const handleSearch = (keyword) => {
      dispatch(fetchUser(keyword))
      dispatch(toggleSearchResultBoxOn())
   }
   console.log('re-render');

   const handleChange = (event) => {
      setSearchValue(event.target.value)
      // handleSearch(event.target.value)
      // dispatch(toggleSearchResultBoxOn())
   }

   return (
      <div className="search-box">
         <input
            value={searchValue}
            onChange={handleChange}
            onKeyPress={(event) => {
               if (event.code === 'Enter') handleSearch(event.target.value)
            }}
            // onFocus={() => dispatch(toggleSearchResultBoxOn())}
            type="text"
            placeholder="Search Github username..."
         />
         <button onClick={() => handleSearch(searchValue)} type="submit">
            Search
         </button>
      </div>
   )
})

export default SearchBox