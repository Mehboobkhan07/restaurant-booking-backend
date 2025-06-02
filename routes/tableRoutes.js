const express = require('express');
const router = express.Router();
const {
  createTable,
  getTables,
  updateTable,
  deleteTable
} = require('../controllers/tableController');


const{authMiddleware,authorizeRoles}= require('../middlewares/authMiddleware');

// We'll add admin auth middleware later
router.post('/', authMiddleware,authorizeRoles('admin'),createTable); //only admin can create a table
router.get('/', authMiddleware , getTables); // admin and customer both can view the table
router.put('/:id',authMiddleware,authorizeRoles('admin'), updateTable);  //only admin can update table
router.delete('/:id',authMiddleware,authorizeRoles('admin') ,deleteTable); 

module.exports = router;
