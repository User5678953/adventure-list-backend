////////////////////////////////
// IMPORTS
////////////////////////////////
const express = require('express')
const router = express.Router()

////////////////////////////////
// MODELS
////////////////////////////////



////////////////////////////////
// ROUTES
////////////////////////////////

// INDEX
router.get('/', async (req, res) => {
    // res.send('index route')
    try {
        res.json(await AdventureList.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE
router.post('/', async (req, res) => {
    try {
        res.json(await AdventureList.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE

// DELETE


////////////////////////////////
// EXPORTS
////////////////////////////////
module.exports = router