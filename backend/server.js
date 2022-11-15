const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
// allows us pass enviroment variables to the backend (using an env file)
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());
app.use(express.json());

// passing/connecting mongodb uri to our backend
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

// when we browser at /books, it will go to the routes file books.js
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})