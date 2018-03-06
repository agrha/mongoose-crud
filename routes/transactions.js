var express = require('express');
var router = express.Router();
const Transactions = require('../controllers/transactions')

/* GET users listing. */
router.get('/',Transactions.viewTransactions)
router.post('/',Transactions.addTransactions)
router.put('/',Transactions.updateTransactions)
router.delete('/',Transactions.deleteTransactions)

module.exports = router;
