# Notes for MERN App

## Setup

- Make 2 folders: ```client``` and ```server```

In ```client```, run this to make a new react app:
```
npx create-react-app ./
```

In ```server```, first create ```index.js``` (starting point of server application). Then, run the following:
```
npm init -y
npm install body-parser cors express mongoose nodemon
```
- body-parser: enable us to send post requests
- cors: enable cross origin requests
- express: framework for routing of application
- mongoose: create models for posts
- nodemon: so we don't have to manually reset the server every time we make a change