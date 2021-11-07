export const fetchUser = (keyword) => {
   return new Promise(async (resolve, reject) => {
      if (keyword) {
         const queryParams = {
            per_page: 5,
            q: keyword,
         }
         const data = await (
            await fetch(
               `https://api.github.com/search/users?${
                  Object.entries( queryParams,)
                     .map( ([key, value]) => 
                        `${encodeURIComponent(key)}=${encodeURIComponent( value,)}`,)
                     .join('&')}`,)
         ).json()
         if (data.message) {
            reject('Not found')
         } 
         else resolve(data.items)
      }
   })
}

export const fetchUserDetail = async (username) => {
   const data = await (
      await fetch(`https://api.github.com/users/${username}`)
   ).json()
   return data
}
