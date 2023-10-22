////////////////////////////////
// IMPORTS
////////////////////////////////
const express = require('express')
const router = express.Router()
const session = require('express-session')

////////////////////////////////
// MODELS
////////////////////////////////

// Need to adjust as needed once models are created
const Adventures = require('../models/AdventureLists')

////////////////////////////////
// ROUTES
////////////////////////////////

// INDEX
router.get('/', async (req, res) => {
    // res.send('index route')
    try {
        res.json(await Adventures.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// SHOW
router.get('/:id', async (req,res) => {
    try {
        res.json(await Adventures.findById(req.params.id))
    } catch (err){
        console.log(err)
        res.status(400).json(err)
    }
})

// CREATE
router.post('/', async (req, res) => {
    try {
        const currentUser = req.session.username.username
        console.log(currentUser)
        req.body.owner = currentUser
        res.json(await Adventures.create(req.body))
        console.log("Sucesfully Created Adventure")
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        res.json(await Adventures.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.send(400).json(error)
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Adventures.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.send(400).json(error)
    }
})

////////////////////////////////
// EXPORTS
////////////////////////////////
module.exports = router