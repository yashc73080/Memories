# Notes for MERN App

## Setup

- Make 2 folders: ```client``` and ```server```

### Client

In ```client```, run this to make a new react app and install dependencies:
```
npx create-react-app ./
npm install axios moment react-file-base64 redux redux-thunk
```
- axios: for making API requests
- moment: library for working with time and date
- react-file-base64: to convert images
- redux, redux-thunk: asynchronous actions

Make ```index.js```, it is where we will connext React application to index.html file

### Server

In ```server```, first create ```index.js``` (starting point of server application). Then, run the following:
```
npm init -y
npm install body-parser cors express mongoose nodemon dotenv
```
- body-parser: enable us to send post requests
- cors: enable cross origin requests
- express: framework for routing of application
- mongoose: create models for posts
- nodemon: so we don't have to manually reset the server every time we make a change
- dotenv: to be able to use a .env file

Now, update ```package.json``` to add these:
```
  "type": "module",
```
```
"scripts": {
    "start": "nodemon index.js"
  },
```

## Running the Application

For the client side: run with ```npm start``` <br>
For the server side: run with ```npm  start```

## Backend

Create folders ```routes```, ```controllers```, and ```models```, all in the ```server``` folder. ```routes``` will contain all the callback function calls. ```controllers``` will contain all the logic to be used for each route. And, ```models``` will interact with MongoDB. 