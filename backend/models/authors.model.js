const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    author: {type: String, required: true, unique: true},
}, {
    timestamps: true,
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;