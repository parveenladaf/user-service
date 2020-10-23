const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, index: true },
  mobile_no: { type: String, required: true, unique: true, index: true },
  address: { type: String, required: true, index: true },
  email_id: { type: String, required: true, index: true }
});

const Users = model('Users', userSchema)
module.exports = Users;
