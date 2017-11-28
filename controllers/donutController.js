const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const Donut = mongoose.model('Donut');

exports.addDonut = async (req, res) => {

    let saveDonut = {
        name: req.body.name,
        description: req.body.description
    }

    const donut = await Store.findOne({_id: req.body._id}, (error, store) => {
        if(!error) {
            store.donuts.push(saveDonut)
            store.save(function(err, product){
                console.log('product =>', product)
                res.json({id: product.id, donuts: product.donuts}) // returns back new document
            });

            // store.save()
        }
    })

    // if(donut){
    //     let stores = await Store.find({owner: req.user._id})
    //     console.log('stores =>',stores)
    //     res.json(stores)
    // }

    //let store = await Store.findOneAndUpdate({_id: req.body._id}, { donuts: 'jason bourne' }, options, callback)





    // console.log('donut => ', donut)
    // res.json(donut) // returns back new document
}
