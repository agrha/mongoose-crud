var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  member:{type: Schema.Types.ObjectId, ref: 'customers'},
  days:Number,
  out_date:{type:Date,default:Date.now},
  due_date:{type:Date,default:Date.now},
  in_date:{type:Date,default:Date.now},
  fine:2000,
  booklist:[{ type: Schema.Types.ObjectId, ref: 'books' }]
});

module.exports = mongoose.model('transactions', customersSchema);
