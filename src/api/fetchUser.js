
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