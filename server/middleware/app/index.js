const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

module.exports = (app) =>
  app.use([
    helmet(),
    xss(),
    cors({ credentials: true, origin: true }),
    compression(),
    cookieParser(),
    express.json({ limit: '2mb' }),
    express.urlencoded({ extended: true, limit: '2mb' }),
    rateLimit({
      max: 100,
      windowMs: 60 * 60 * 1000,
      message: 'Too many requests from this IP. Try again in an hour!',
    }),
  ]);
