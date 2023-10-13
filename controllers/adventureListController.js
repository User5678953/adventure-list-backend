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
router.put('/:id', async (req, res) => {
    try {
        res.json(await AdventureList.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.send(400).json(error)
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        res.json(await AdventureList.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.send(400).json(error)
    }
})

////////////////////////////////
// EXPORTS
////////////////////////////////
module.exports = router