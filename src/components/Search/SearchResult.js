import React from 'react'
import { useSelector } from 'react-redux'

import { usersSelector } from 'features/search/searchSlice'

export default React.memo(function () {
   const usernames = useSelector(usersSelector)

   return (
      <ul className="search-result">
         {usernames.map((username) => (
            <li key={username}>{username}</li>
         ))}
      </ul>
   )
})
