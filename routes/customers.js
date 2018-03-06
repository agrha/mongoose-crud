var express = require('express');
var router = express.Router();
const Customers = require('../controllers/customers.js')

/* GET users listing. */
router.get('/',Customers.viewCustomers)
router.post('/',Customers.addCustomers)
router.put('/',Customers.updateCustomers)
router.delete('/',Customers.deleteCustomers)

module.exports = router;
