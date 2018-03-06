var express = require('express');
var router = express.Router();
const Books = require('../controllers/books.js')

/* GET users listing. */
router.get('/',Books.viewBooks)
router.post('/',Books.addBooks)
router.put('/',Books.updateBooks)
router.delete('/',Books.deleteBooks)

module.exports = router;
