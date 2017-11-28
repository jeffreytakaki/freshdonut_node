const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({
    name: String,
    address: {
        street: String,
        zipcode: String,
        state: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    address: {
        lat: String,
        lng: String
    },
    description: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must supply an author'
    },
    donuts: []

}, {
    toJSON: { virtuals: true},
    toObject: { virtuals: true}
});

mongoose.model('Store', storeSchema);
