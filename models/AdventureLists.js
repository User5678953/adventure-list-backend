const mongoose = require('mongoose')
const Schema = mongoose.Schema
const photos = require('./Photos')

const AdventureListSchema = Schema({
    title: { type: String, required: true},
    coverPhoto: String,
    description: {type: String, required: true},
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Photo"}],
    dateCreated: {type: Date},
    location: {type: String},
    completed: Boolean,
    tags: {type: String},
    owner: { type: String, required: false },
    coOwners: [{type: String}]
})

const AdventureList = mongoose.model('AdventureList', AdventureListSchema)

module.exports = AdventureList