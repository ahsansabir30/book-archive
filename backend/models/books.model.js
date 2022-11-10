const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    isbn: {type: Number, required: true, unique: true},
    published_date: {type: Date, required: true}
});

const Books = mongoose.model('Books', bookSchema);
module.exports = Books;