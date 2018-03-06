var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name:        String,
  memberid:    String,
  address:     String,
  zipcode:     String,
  phone:       String
});

module.exports = mongoose.model('customers', customersSchema);
