require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const middleware = require('./middleware');
const router = require('./routes');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

middleware(app);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1', router);

module.exports = app;
