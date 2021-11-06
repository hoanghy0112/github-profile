
export const fetchUser = (username) => {
   return new Promise((resolve, reject) => {
      if (username) {
         resolve([
            {
               username,
               repo: 10,
            }
         ])
      }
   })
}

export const fetchUserDetail = async username => {
   const data = await (await fetch('https://api.github.com/users/hoanghy0112')).json()
   return data
}