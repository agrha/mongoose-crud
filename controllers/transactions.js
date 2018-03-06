const transactionsSchema = require('../models/Transactions')
const moment = require('moment')


class Transactions {
  constructor() {

  }

  static viewTransactions(req,res){
    transactionsSchema.find()
    .populate('booklist')
    .populate('member')
    .exec()
    .then(dataTransaction=>{
      res.status(200).json({
        message:'this is your transactions data',
        dataTransaction
      })
    }).catch(err=>{
      res.status(404).json({
        message:'error when reading transactions file'
      })
    })
  }

  static addTransactions(req,res){
    let objCreate = {
      member:req.body.customerId,
      days:req.body.days,
      out_date: new Date(),
      status:'belum dikembalikan'
      due_date: moment().add(6,'days'),
      booklist:[req.body.bookId1,req.body.bookId2]
    }
    transactionsSchema.create(objCreate)
    .then(data=>{
      res.status(200).json({
        message:'transaction successfull'
      })
    }).catch(err=>{
      message:'transaction failed'
    })
  }

  static updateTransactions(req,res){
    transactionsSchema.findOne({_id:req.body.id})
    .exec()
    .then(data=>{
      let in_date = req.body.in_date
      let fine_days = in_date.getDate()-data.due_date.getDate()
      // console.log(data);
      let objUpdate = {
        in_date: in_date,
        fine: data.booklist.length * 1000 * fine_days,
        status:'dikembalikan'
      }
      transactionsSchema.findOneAndUpdate(data,objUpdate)
      .then(()=>{
        res.status(200).json({
          message:'buku sudah dikembalikan '
        })
      }).catch(err=>{
        message:'gagal dalam proses update'
      })
    })
  }

  static deleteTransactions(req,res){
    transactionsSchema.remove({_id:req.params._id})
    .exec()
    .then(()=>{
      res.status(200).json({
        message:'transaction deleted successfully'
      })
    }).catch(err=>{
      res.status(404).json({
        message:'delete transaction failed'
      })
    })
  }

}

module.exports = Transactions;
