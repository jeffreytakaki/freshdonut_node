const mongoose = require('mongoose');
const { Schema } = mongoose;

const donutSchema = new Schema({
    name: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    image: String

});

mongoose.model('Donut', donutSchema);
