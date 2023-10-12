
/////////////////////////////////
// DEPENDENCIES 
////////////////////////////////
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

////////////////////////////////
// ROUTERS 
////////////////////////////////

const photosRouter = require('./controllers/photosController')

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


////////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

////////////////////////////////
// ROUTES 
////////////////////////////////

// TEST Route
app.get('/', (req, res) => {
  res.send('THIS IS A TEST ROUTE!');
});

app.use('/photos', photosRouter)

////////////////////////////////
// LISTENER 
////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
