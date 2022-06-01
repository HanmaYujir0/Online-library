const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: String,
    rent: [{
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId
    }],
    isBlocked: {
        type: Boolean,
        default: false,
    }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
