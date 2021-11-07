import React from 'react'
import { useSelector } from 'react-redux'
import { parseISO, format } from 'date-fns'

import { userInfoSelector } from 'features/user/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faThumbtack,
   faLink,
   faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './Content.sass'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

export default React.memo(function () {
   const {
      status,
      username,
      bio,
      avatar,
      name,
      location,
      repos,
      github,
      followers,
      following,
      created_at,
      blog,
      twitter_username: twitter,
      company,
   } = useSelector(userInfoSelector)

   // const status = 'finished'
   // const username = 'A'
   // const avatar = 'https://avatars.githubusercontent.com/u/1410106?v=4'
   // const repos = 46
   // const github = 'https://github.com/A'
   // const name = 'Shuvalov Anton'
   // const company = null
   // const blog = 'http://shuvalov.info'
   // const location = 'Ho Chi Minh, Vietnam'
   // const bio = null
   // const twitter = 'shuvalov_js'
   // const followers = 468
   // const following = 141
   // const created_at = '2012-02-05T14:53:26Z'

   return (
      <div className="content">
         {status === 'finished' ? (
            <>
               <div className="content__image-wrapper">
                  <img src={avatar} alt="User avatar" />
               </div>
               <div className="content__main">
                  <div className="content__header">
                     <div className="content__header__info">
                        <div className="content__title">
                           <h2 className="content__name">{name}</h2>
                           <a
                              href={github}
                              target="_blank"
                              className="content__username"
                           >
                              @{username}
                           </a>
                        </div>
                        <div className="content__join-date">
                           <p className="text--bold">
                              Joined{' '}
                              {format(parseISO(created_at), 'dd MMM yyyy')}
                           </p>
                        </div>
                     </div>
                     <p className="text--faded">
                        {bio || 'This profile has no bio'}
                     </p>
                  </div>
                  <div className="content__profile-info">
                     <div className="content__profile-info__item">
                        <p className="content__profile-info__title text--bold">
                           Repos
                        </p>
                        <p className="content__profile-info__number">{repos}</p>
                     </div>
                     <div className="content__profile-info__item">
                        <p className="content__profile-info__title text--bold">
                           Followers
                        </p>
                        <p className="content__profile-info__number">
                           {followers}
                        </p>
                     </div>
                     <div className="content__profile-info__item">
                        <p className="content__profile-info__title text--bold">
                           Following
                        </p>
                        <p className="content__profile-info__number">
                           {following}
                        </p>
                     </div>
                  </div>
                  <div className="content__contact">
                     {[
                        {
                           icon: <FontAwesomeIcon icon={faThumbtack} />,
                           text: location,
                        },
                        {
                           icon: <FontAwesomeIcon icon={faTwitter} />,
                           text: twitter,
                           link: twitter && `https://twitter.com/${twitter}`
                        },
                        {
                           icon: <FontAwesomeIcon icon={faLink} />,
                           text: blog,
                           link: blog,
                        },
                        {
                           icon: <FontAwesomeIcon icon={faBuilding} />,
                           text: company,
                        },
                     ].map((item, index) => (
                        <div
                           key={index}
                           className={`content__contact__item ${
                              item.text ? 'text--bold' : 'text--faded'
                           }`}
                        >
                           <div className="content__contact__icon">
                              {item.icon}
                           </div>
                           { item.link ? 
                              <a
                                 href={item.link || ''}
                                 target="_blank"
                                 className="content__contact__text"
                              >
                                 {item.text || 'Not available'}
                              </a> :
                              <div
                                 href={item.link || ''}
                                 className="content__contact__text"
                              >
                                 {item.text || 'Not available'}
                              </div> 
                           }
                        </div>
                     ))}
                  </div>
               </div>
            </>
         ) : (
            <>
               <p>Nothing had been found</p>
            </>
         )}
      </div>
   )
})
