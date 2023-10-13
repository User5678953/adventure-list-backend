const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotosSchema = Schema({
    imageURL: {type: String, required: true},
    description: {type: String},
    public: Boolean,
    location: String,
    tags: [{type: String}],
    dateUploaded: {type: Date}
})

const Photo = mongoose.model('Photo', PhotosSchema)

module.exports = Photo