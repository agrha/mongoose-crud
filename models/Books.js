var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn:       String,
  title:      String,
  author:     String,
  category:   String,
  stock:      Number
});

module.exports = mongoose.model('books', bookSchema);
