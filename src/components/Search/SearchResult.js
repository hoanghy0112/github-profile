import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { usersSelector } from 'features/search/searchSlice'
import { fetchUserDetail } from 'features/user/userSlice'

export default React.memo(function () {
   const usernames = useSelector(usersSelector)
   const dispatch = useDispatch()

   const handleLoadUserProfile = username =>  () => {
      dispatch(fetchUserDetail(username))
   }

   return (
      <ul className="search-result">
         {usernames.map((username) => (
            <li onClick={handleLoadUserProfile(username)} key={username}>{username}</li>
         ))}
      </ul>
   )
})
