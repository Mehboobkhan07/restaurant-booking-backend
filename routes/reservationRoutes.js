const express = require('express');
const router = express.Router();
const {
  createReservation,
  getMyReservations,
  cancelReservation,
  getAllReservations
} = require('../controllers/reservationController');

const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createReservation); // customer
router.get('/my', authMiddleware, getMyReservations); // customer
router.put('/cancel/:id', authMiddleware, cancelReservation); // customer
router.get('/admin/all', authMiddleware, authorizeRoles('admin'), getAllReservations); // admin

module.exports = router;
