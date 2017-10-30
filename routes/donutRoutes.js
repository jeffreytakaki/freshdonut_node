// Error Handling
const { catchErrors } = require('./errorHandlers');

// Donut Routes
const donutController = require('../controllers/donutController');

//middleware
const requireLogin = require('../middlewares/requireLogin');


module.exports = (app) => {

    app.post('/api/donut/addDonut', catchErrors(donutController.addDonut));

};

