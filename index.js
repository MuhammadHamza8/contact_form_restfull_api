const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/contact');



const app = express();
app.use(express.json());

// Database connection
require('./env/connection');

// routes
app.use('/api/contact',routes);



app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})