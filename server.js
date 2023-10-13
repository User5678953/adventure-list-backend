
/////////////////////////////////
// DEPENDENCIES 
////////////////////////////////
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

////////////////////////////////
// DATABASE CONNECTION 
////////////////////////////////

// Database not connected, yet
const { DATABASE_URL } = process.env;

// Mongoose connection
mongoose.connect(DATABASE_URL)

// Mongoose connection messages
mongoose.connection
    .on('open', () => console.log('You are connected to mongoose'))
    .on('close', () => console.log('You are disconnected to mongoose'))
    .on('error', (err) => console.log(err))

////////////////////////////////
// MODELS 
////////////////////////////////


///////////////////////////////
// CONTROLLERS
///////////////////////////////
// Auth Controller
const authenticationController = require('./controllers/authenticationController.js')

// Photos Controller
const photosController = require("./controllers/photosController.js");

// Adventure Controller
const adventureListController = require('./controllers/adventureListController.js')

////////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)


////////////////////////////////
// ROUTES 
////////////////////////////////

// TEST Route
app.get('/', (req, res) => {
  res.send('THIS IS A TEST ROUTE!');
});


// USE CONTROLLERS
app.use('/adventureList', adventureListController)
app.use('/photos', photosController)
// Authentication Controller Route
app.use('/register', authenticationController)

////////////////////////////////
// LISTENER 
////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))