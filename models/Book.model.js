const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name: String,
    genre: {
        ref: "Genre",
        type: mongoose.SchemaTypes.ObjectId,
    },
    client: {
        ref: "Client",
        type: mongoose.Schema.Types.ObjectId,
        default: false
    },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;