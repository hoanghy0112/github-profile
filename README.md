# Github-profile app

[![Generic badge](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://shields.io/) 
[![Generic badge](https://img.shields.io/badge/issues-2-red.svg)](https://shields.io/) 
[![Generic badge](https://img.shields.io/badge/build-passing-green.svg)](https://shields.io/)  
###
Search github user by their username  
[https://hoanghy0112.github.io/github-profile/](https://hoanghy0112.github.io/github-profile/)

### Design prototype
[Here](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6) is the design prototype of this app

### Preview image
![Preview image](./Preview.png)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


### Libraries and techniques
- React and React Hooks
- Redux and Redux toolkit
- React Router
- Sass
- Github API

### Running locally
1. Clone the respository
2. Install `npm`
3. Run `npm install` to install dependencies
4. Run the server with `npm start`
5. Visit `http://localhost:5000/`

### Problems
- Some bugs when API fail to work  [**Not fixed**]
- Github API has a strict limit for unauthenticated users as 60 requests/hour, so each time we search we must click `search` button 

### Next version
- Authenticate and add feature that app will search for result each time we type in the search box
- Add loading effect and card `Not found` if it doesn't exist any user match the username we type in
- Error catching feature 