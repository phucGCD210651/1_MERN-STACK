const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const port = process.env.PORT || 5000;
const logger = require('./middleware/logger.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes.js'));

//use the custom errorhandler I implement
app.use(errorHandler)

app.use(logger);

app.listen(port, () => console.log(`Server started on port ${port}`));