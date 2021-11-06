import React from 'react'
import { useSelector } from 'react-redux'
import { userInfoSelector } from 'features/user/userSlice'

export default React.memo(function () {
   const userInfo = useSelector(userInfoSelector)

   return (
      <div className="content">
         {userInfo.status === 'finished' ? (
            <>
               <p>{userInfo.name}</p>
               <p>{userInfo.repos}</p>
               <img src={userInfo.avatar} alt="" />
            </>
         ) : (
            <>
               <p>Nothing had been found</p>
            </>
         )}
      </div>
   )
})
