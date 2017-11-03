const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');


    exports.getStores = async (req, res) => {
        var stores = await Store.find();
        res.json(stores);
    };

    exports.getStoresByOwner = async (req, res) => {
        var stores = await Store.find({owner: req.user._id})
        res.json(stores)
    }

    exports.createStore = async (req, res) => {
        req.body.owner = req.user._id;
        let store;

        if(req.body._id) { //find by id and save
            var query = {_id: req.body._id};
            var update = req.body;
            var options = {
                // Return the document after updates are applied
                new: true,
                upsert: true,// Create a document if one isn't found. Required for `setDefaultsOnInsert`
                setDefaultsOnInsert: true
            };

            store = Store.findOneAndUpdate(query, update, options, function (error, doc) {
                if(!error) {
                    console.log('doc =>',doc)
                } else {
                    console.log('error with findOneAndUpdate => ', error)
                }
            });

        } else { // new record
            delete req.body._id;
            store = await (new Store (req.body)).save();

        }

        res.json(store);
    };

    exports.updateStore = async (req, res) => {
        req.body.owner = req.user._id;
        const store = await (new Store (req.body)).save();
        res.json(store);
    };

    exports.deleteStore = async (req, res) => {
        const store = await Store.findByIdAndRemove(req.body.storeid, (err, success) => {
            if(!err) {
                res.json(success);
            } else {
                res.json({'message':'there was an error deleting. try again'})
            }
        });

    };



