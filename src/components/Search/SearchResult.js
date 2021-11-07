import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
   usersSelector,
   searchResultBoxSelector,
} from 'features/search/searchSlice'
import { toggleSearchResultBox, toggleSearchResultBoxOff } from 'features/search/searchSlice'
import { fetchUserDetail } from 'features/user/userSlice'

import './SearchResult.sass'

export default React.memo(function () {
   const openState = useSelector(searchResultBoxSelector)

   const users = useSelector(usersSelector)
   const dispatch = useDispatch()

   const handleLoadUserProfile = (username) => () => {
      dispatch(toggleSearchResultBoxOff())
      dispatch(fetchUserDetail(username))
   }

   const handleToggleSelect = (event) => {
      dispatch(toggleSearchResultBox())
   }

   return (
      <div className="search-result">
         <div
            className={`wrapper ${openState ? '' : 'closed'}`}
            onClick={handleToggleSelect}
         ></div>
         <ul key={openState} className={`${openState ? '' : 'ul-closed'}`}>
            {/* some thing inside ul */}
            {users.map((user) => (
               <li onClick={handleLoadUserProfile(user.login)} key={user.id}>
                  {user.login}
               </li>
            ))}
         </ul>
      </div>
   )
})
