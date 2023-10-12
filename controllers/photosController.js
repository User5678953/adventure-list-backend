// Require mongoose

// Require model

// Require Express
const express = require('express')

// Require Router
const router = express.Router()

// POST - CREATE a new photo
router.post('/upload', (req, res) => {
    // upload logic
})

// GET - READ a single photo
router.get("/:id", async (req, res) => {

})

// DELETE - DELETE a single photo
router.delete("/:id", async (req, res) => {

})

// GET - READ all photos
router.get('/', async (req, res) => {
    
})

// Export router

module.exports = router