const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const Donut = mongoose.model('Donut');

const storeController = require('./storeController')


exports.addDonut = async (req, res) => {
    // find user
    // update user donuts array
    console.log('req.user._id -> ', req.body)

    const donut = await Store.findOne({_id: req.body._id}, (error, store) => {
        store.donuts.push(req.body)
        store.save();
    })

    console.log('donut => ', donut)

    res.json(donut) // returns back new document
}
