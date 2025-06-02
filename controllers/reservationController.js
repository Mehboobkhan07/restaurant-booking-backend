const Reservation = require('../models/Reservation');
const Table = require('../models/Table');
const { getPricingMultiplier } = require('../utils/pricing');

// Create reservation
exports.createReservation = async (req, res) => {
  try {
    const { date, time, numberOfGuests, specialRequest } = req.body;

    const allTables = await Table.find();
    let reservedTables = await Reservation.find({ date, time, status: 'reserved' }).select('table');
    reservedTables = reservedTables.map(r => r.table.toString());

    const availableTables = allTables.filter(table =>
      !reservedTables.includes(table._id.toString()) &&
      table.capacity >= numberOfGuests
    );

    let reservation;

    if (availableTables.length > 0) {
      // Table available
      reservation = new Reservation({
        user: req.user._id,
        table: availableTables[0]._id,
        date,
        time,
        numberOfGuests,
        specialRequest,
        waitlisted: false,
        price
      });
    } else {
      // No table: Add to waitlist
      reservation = new Reservation({
        user: req.user._id,
        table: null,
        date,
        time,
        numberOfGuests,
        specialRequest,
        waitlisted: true
      });
    }

    await reservation.save();

    res.status(201).json({
      message: reservation.waitlisted
        ? 'All tables full. You are added to the waitlist.'
        : 'Reservation created.',
      reservation
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// Get current user's reservations
exports.getMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id }).populate('table');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Cancel reservation
exports.cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);

    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    if (reservation.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to cancel this reservation' });
    }

    reservation.status = 'cancelled';
    await reservation.save();

    res.json({ message: 'Reservation cancelled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Admin: get all reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user').populate('table');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
