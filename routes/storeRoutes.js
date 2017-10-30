// Error Handling
const { catchErrors } = require('./errorHandlers');

// Store Routes
const storeController = require('../controllers/storeController');

//middleware
const requireLogin = require('../middlewares/requireLogin');


module.exports = (app) => {

    app.get('/api/stores', catchErrors(storeController.getStores));
    app.get('/api/stores/:id', requireLogin, catchErrors(storeController.getStoresByOwner));
    app.post('/api/store/addStore', requireLogin, catchErrors(storeController.createStore));
    app.post('/api/store/deleteStore', catchErrors(storeController.deleteStore));



};

