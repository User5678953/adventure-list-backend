// Require mongoose

// Require model

// Require Express
const express = require('express')

// Require Router
const router = express.Router()

// POST - CREATE a new photo
router.post('/upload', (req, res) => {
    try {
      // upload logic
    } catch (error) {
        res.status (400).send(error)
    }
})

// GET - READ a single photo
router.get("/:id", async (req, res) => {
    try {
        // read logic
    } catch (error) {
        res.status(500).send(error)
    }
})

// DELETE - DELETE a single photo
router.delete("/:id", async (req, res) => {
     try {
       // delete logic
     } catch (error) {
       res.status(500).send(error);
     }
})

// GET - READ all photos
router.get('/', async (req, res) => {
      try {
        // read all logic
      } catch (error) {
        res.status(500).send(error);
      }
})

// Export router

module.exports = router