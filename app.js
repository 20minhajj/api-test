const express = require('express');
const app = express();
const mongoose = require('mongoose');
const smsRoutes = require('./routes/sms');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://harith:Tanzania_98@cluster0-9clfo.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
  

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/info/farmer', smsRoutes)

module.exports = app;