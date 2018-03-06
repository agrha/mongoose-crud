var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  member:{type: Schema.Types.ObjectId, ref: 'customers'},
  days:Number,
  out_date:{type:Date,default:Date.now},
  due_date:{type:Date},
  in_date:{type:Date},
  fine:Number,
  booklist:[{type: Schema.Types.ObjectId, ref: 'books'}]
});

module.exports = mongoose.model('transactions', transactionsSchema);
