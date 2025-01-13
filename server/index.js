import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express(); // Initialize the express app
dotenv.config();

// Set up bodyParser to properly send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // Above routes so that CORS applies to the routes as well

app.use('/posts', postRoutes); // Set up routes for the posts

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
mongoose.connect(CONNECTION_URL) // { useNewUrlParser: true, useUnifiedTopology: true }
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

