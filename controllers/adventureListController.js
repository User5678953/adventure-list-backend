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
        // variable for grabbing current user
        // const currentUser = req.session.username.username
        // console.log(currentUser)

        // finding all items in the AdventureList
        const foundList = await Adventures.find({})

        // filter the list by making sure the owner is the same as the current user
        // const filteredList = foundList.filter((item) => item.owner === currentUser)
        console.log(foundList)
        res.send(foundList)
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
        // variable for grabbing current user
        // const currentUser = req.session.username.username
        // console.log(currentUser)
        // making the owner equal to the current user that is logged in
        // req.body.owner = currentUser
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