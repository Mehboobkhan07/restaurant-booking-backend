const Table = require('../models/Table');

// Add a table
exports.createTable = async (req, res) => {
  try {
    const { tableNumber, capacity, location } = req.body;

    const exists = await Table.findOne({ tableNumber });
    if (exists) return res.status(400).json({ message: 'Table number already exists' });

    const table = new Table({ tableNumber, capacity, location });
    await table.save();

    res.status(201).json({ message: 'Table added', table });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all tables
exports.getTables = async (req, res) => {
  try {
    const tables = await Table.find().sort({ tableNumber: 1 });
    res.json(tables);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update table
exports.updateTable = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Table.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: 'Table updated', updated });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete table
exports.deleteTable = async (req, res) => {
  try {
    const { id } = req.params;
    await Table.findByIdAndDelete(id);
    res.json({ message: 'Table deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
