# Notes for MERN App

## Setup

- Make 2 folders: ```client/``` and ```server/```

### Client

In ```client/```, run this to make a new react app and install dependencies:
```
npx create-react-app ./
npm install axios moment react-file-base64 redux redux-thunk react-redux
```
- axios: for making API requests
- moment: library for working with time and date
- react-file-base64: to convert images
- redux, redux-thunk, react-redux: asynchronous actions

Make ```index.js```, it is where we will connext React application to index.html file

### Server

In ```server/```, first create ```index.js``` (starting point of server application). Then, run the following:
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

## MongoDB Setup

- Go to **MongoDB** Atlas page and create a new cluster. Choose M0. 
- Copy the link to connect to this cluster, the one with the username and password in it.
- Go to **Database Access** under **Security** and Add a New Database User.
  - Write some username and password.
  - Click the Built-in Role and choose "Read and write to any database"
- Then go to **Network Access** under **Security** and ensure that the IP address listed includes current IP address. 

## Backend

Create folders ```routes/```, ```controllers/```, and ```models/```, all in the ```server/``` folder. ```routes/``` will contain all the callback function calls. ```controllers/``` will contain all the logic to be used for each route. And, ```models/``` will interact with MongoDB. 

## Listening to the API

In ```client/```, we need to add code to get information from the API localhost url. Make 3 new folders: ```api/```, ```actions/```, ```reducers/``` all in ```src/```. ```api/``` uses axios to fetch data while ```actions/``` and ```reducers/``` use redux. 