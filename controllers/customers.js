const customersSchema = require('../models/Customers')

class Customers {
  constructor() {

  }
  static viewCustomers(req,res,next){
    customersSchema.find()
    .exec()
    .then(booksData=>{
      res.status(200).json({
        message:'this is list of customer in our library',
        booksData
      })
    }).catch(err=>{
      res.status(404).json({
        message:'books data is not found'
      })
    })
  }

  static addCustomers(req,res,next){
    let objCreate = {
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
    }
    customersSchema.create(objCreate)
    .then(()=>{
      res.status(200).json({
        message:'data sucessfully created',
        objCreate
      })
    }).catch(err=>{
      res.status(404).json({
        message:'error when creating data'
      })
    })
  }

  static updateCustomers(req,res,next){
    let target = {
      _id:req.params._id
    }
    let objUpdate = { $set:{
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
      }
    }
    customersSchema.findOneAndUpdate(target,objUpdate)
    .exec()
    .then(data=>{
      res.status(200).json({
        message:'customer update success',
        data
      })
    }).catch(err=>{
      res.status(404).json({
        message:'customer update failed'
      })
    })
  }

  static deleteCustomers(req,res,next){
    customersSchema.remove({_id:req.params.id})
    .then(data=>{
      res.status(200).json({
        message:'you are sucessfully delete a customer'
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at deleting customer'
      })
    })
  }

}

module.exports = Customers;
