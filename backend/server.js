const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const watchListRoutes = require('./routes/watchList');

const app = express();

app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.DATABASE)
        .then(()=>{console.log('db connected');})
        .catch(()=>{console.log('error db');});

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', watchListRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`port is ${port}`);
});


