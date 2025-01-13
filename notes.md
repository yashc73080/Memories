# Notes for MERN App

## Setup

- Make 2 folders: ```client/``` and ```server/```

### Client

In ```client/```, run this to make a new react app and install dependencies:
```
npx create-react-app ./
npm install axios moment react-file-base64 react-redux @reduxjs/toolkit
```
- axios: for making API requests
- moment: library for working with time and date
- react-file-base64: to convert images
- react-redux, reduxjs/toolkit: asynchronous actions

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

## Adding new functionality

When adding new functionality for the website that needs backend logic, follow these steps in this order:
1. Add a new route in ```server/routes/posts.js```.
    - For this to work, whatever variable is being changed needs to be imported from ```server/controllers/posts.js``` so, add it there. 
2. In ```server/controllers/posts.js```, write a new async function to handle whatever functionality was added in the routes. 
    - This step uses the MongoDB model created in ```sever/models/``` so that must be created first.
3. Now onto the ```client/``` side. In ```client/src/api/index.js```, implement a new API call for this. 
4. In ```client/src/actions/posts.js```, create an action creator function that uses the API call just created and a redux dispatch function. 
    - It is a good practice to have the action type as a variable in a separate ```client/src/constants/``` folder. 
5. Update ```client/src/reducers/posts.js``` to make a new case for this action in the switch/case block. 
6. Go to the relevant UI element in ```client/components/``` and implement the frontend functionality for the backend API just created. 
    - Import and initialize a redux dispatch to use the new function. 
    - Import the action that was just created to be used in the UI. 

To summarize: <br>
routes -> controllers -> api -> actions -> reducers -> UI

## Deployment

### Backend (server) on Heroku

1. Setup Heroku account and make new project. Connect it to this project by opening the command line and typing the following command, and then following the instructions:
```bash
heroku login
```
2. Remove existing buildpacks
```bash
heroku buildpacks:clear
```
3. Since this repository has client and server folders, and for Heroku only the server side matters, we must use "multi-buildpack setup". First, add the Monorepo Buildpack:
```bash
heroku buildpacks:add --index 1 https://github.com/lstoll/heroku-buildpack-monorepo
```
4. Add the Node.js Buildpack:
```bash
heroku buildpacks:add --index 2 heroku/nodejs
```
5. Set the ```PATH_BASE``` and ```APP_BASE``` environment variables
```bash
heroku config:set PATH_BASE=server
heroku config:set APP_BASE=server
```
6. Verify that the buildpacks are in the right order using this command:
```bash
heroku buildpacks
```
This is the expected output: 
```text
1. https://github.com/lstoll/heroku-buildpack-monorepo
2. heroku/nodejs
```
7. Verify that ```package.json``` is in ```server/``` and that it has the following script. It must use ```node``` and not ```nodemon```. 
```json
"scripts": {
    "start": "node index.js"
},
```
8. Make a ```Procfile``` in the root of the whole repository (outside ```server/```), with just the following line:
```
web: npm start
```
9. Configure MongoDB Atlas IP Whitelist (in  Network Access) to allow all IPs (```0.0.0.0/0```). This should be temporary since having this is not secure. 
10. Set the ```CONNECTION_URL``` environment variable in Heroku's config:
```bash
heroku config:set CONNECTION_URL=<your-mongodb-connection-string>
```
Place double quotation marks around any ampersands in the string. 
11. Commit the changes:
```bash
git add .
git commit -m <commit message>
```
12. Push the changes to Heroku
```bash
git push heroku main
```
13. To see more detailed logs and possible errors, run:
```bash
heroku logs --tail
```



TODO: search posts by hashtag