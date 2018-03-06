const bookSchema = require('../models/Books')

class Books {
  constructor() {

  }
  static viewBooks(req,res,next){
    bookSchema.find()
    .exec()
    .then(booksData=>{
      res.status(200).json({
        message:'this is list of books that has been found',
        booksData
      })
    }).catch(err=>{
      res.status(404).json({
        message:'books data is not found'
      })
    })
  }

  static addBooks(req,res,next){
    let objCreate = {
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock
    }
    bookSchema.create(objCreate)
    .then(()=>{
      res.status(200).json({
        message:'sucessfully created book data'
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at creating book data'
      })
    })
  }

  static updateBooks(req,res,next){
    let target = {
      id:req.params.id
    }
    let objUpdate = {
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock
    }
    bookSchema.findOneAndUpdate(target,objUpdate)
    .exec()
    .then(data=>{
      res.status(200).json({
        message:'successfully updated book data'
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at updating book data'
      })
    })
  }

  static deleteBooks(req,res,next){
    bookSchema.remove({_id:req.params._id})
    .exec()
    .then(()=>{
      res.status(200).json({
        message:'successfully deleted book data'
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at deleting book data'
      })
    })
  }

}

module.exports = Books;
