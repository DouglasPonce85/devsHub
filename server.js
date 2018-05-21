const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB CONFIG
const db = require('./config/keys').mongoURI;

// CONNECT TO MONGODB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error));

app.get('/', (request, response) => {
    response.send('Hello world - reload...');
});


// USE ROUTES
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port >> ${port}`));