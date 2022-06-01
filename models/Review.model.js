const mongoose = require('mongoose');

const reviewshema = mongoose.Schema({
    text: String,
    clientName: {
        ref: 'Client',
        type: mongoose.SchemaTypes.ObjectId,
    },
    bookName: {
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId,
    }
});

const Review = mongoose.model('Review', reviewshema);

module.exports = Review;
