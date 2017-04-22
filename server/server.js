const express = require('express');
const app = express();
const api = require('./api/api');
const err = require('./middleware/errorMiddleware');

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);

//setup the global error handling
app.use(err());

// export the app for testing
module.exports = app;