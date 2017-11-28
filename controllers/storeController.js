const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');


    exports.getStores = async (req, res) => {
        var stores = await Store.find();
        res.json(stores);
    };

    exports.getStoresByOwner = async (req, res) => {
        console.log('getStoresByOnwer user =>', req.user)
        let stores = await Store.find({owner: req.user._id})
        // console.log('getStoresByOnwer =>', stores)
        res.json(stores)
    }

    exports.createStore = async (req, res, next) => {
        req.body.owner = req.user._id;
        if(req.body._id =='') { delete req.body._id };


        let query = (req.body._id) ? {_id: req.body._id} : {_id: new mongoose.mongo.ObjectID()};
        let update = req.body;
        let options = {
            new: true, // Return the document after updates are applied
            upsert: true, // Create a document if one isn't found. Required for `setDefaultsOnInsert`
            setDefaultsOnInsert: true
        };

        let store = await Store.findOneAndUpdate(query, update, options);

        res.json(store)
    };

    exports.updateStore = async (req, res) => {
        req.body.owner = req.user._id;
        const store = await (new Store (req.body)).save();
        res.json(store);
    };

    exports.deleteStore = async (req, res) => {
        const store = await Store.findByIdAndRemove(req.body.storeid, (err, success) => {
            if(!err) {
                console.log(success)
                res.json(success);
            } else {
                res.json({'message':'there was an error deleting. try again'})
            }
        });

    };



