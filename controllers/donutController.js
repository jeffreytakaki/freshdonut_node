const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const Donut = mongoose.model('Donut');

const storeController = require('./storeController')


exports.addDonut = async (req, res) => {
    let saveDonut = {
        name: req.body.name,
        description: req.body.description
    }

    const donut = await Store.findOne({_id: req.body._id}, (error, store) => {
        if(!error) {
            store.donuts.push(saveDonut)
            store.save();
        }
    })

    res.json(donut) // returns back new document
}
