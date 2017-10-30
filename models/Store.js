const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
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
