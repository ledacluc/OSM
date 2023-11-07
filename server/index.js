// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import posts from './routers/posts.js';

const express = require("express");
const dotenv = require('dotenv');
dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get('/OSM', (req, res) => {
    res.send('This is OSM_SHOP')
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})