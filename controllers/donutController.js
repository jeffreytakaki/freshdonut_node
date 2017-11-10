const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const Donut = mongoose.model('Donut');

const storeController = require('./storeController')


exports.addDonut = async (req, res) => {
console.log('req.user._id => ',req.user._id)
    let saveDonut = {
        name: req.body.name,
        description: req.body.description
    }

    const donut = await Store.findOne({owner: req.user._id}, (error, store) => {
        if(!error) {
            store.donuts.push(saveDonut)
            store.save();
        }
    })

    console.log('donut => ', donut)
    res.json(donut) // returns back new document
}
