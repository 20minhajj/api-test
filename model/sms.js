const mongoose = require('mongoose');

const smsSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  SenderNumber: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },

});

module.exports = mongoose.model('sms', smsSchema)