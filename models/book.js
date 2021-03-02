const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
        type: String,
        unique: true
    },
    authors: {type: Array},
    description: { type: String },
    image: { type: String },
    link: { type: String }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book