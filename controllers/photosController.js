
// Require model
const Photos = require("../models/Photos")

// Require Express
const express = require('express')

// Require Router
const router = express.Router()

// POST - CREATE a new photo
router.post('/upload', (req, res) => {

    try {
        // capture URL from body
        const imageURL = req.body.imageURL
        // if image url captured, log success!
        if (imageURL) {
            console.log(imageURL)
            // success
            res.status(201).json("File uploaded successfully!");
        } else {
            console.log('No URL image provided')
            // bad request error
            res.status(400).json(error)
        }
    } catch (error) {
        // server side error
        res.status(500).json(error)
    }
})
 
// GET - READ a single photo
router.get("/:id", async (req, res) => {
    try {
        // res.send("Read single photo route is working!")
        // read logic
        const photo = await Photos.findById(req.params.id)
        res.json(photo)
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE - DELETE a single photo
router.delete("/:id", async (req, res) => {
    try {
        // res.send("Delete single photo route is working!")
        // delete logic
        res.json(await Photos.findByIdAndRemove(req.params.id));
     } catch (error) {
       res.status(500).json(error)
     }
})

// GET - READ all photos
router.get('/', async (req, res) => {
    try {
        // res.send("Read all photos route is working!")
        // read all logic
        const photos = await Photos.find()
        res.json(photos)
      } catch (error) {
        res.status(500).json(error)
      }
})

// Export router
module.exports = router