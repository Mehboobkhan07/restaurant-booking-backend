const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    enum: ['indoor', 'outdoor', 'window'],
    default: 'indoor'
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  price: {
  type: Number,
  default: 500 
}
}, { timestamps: true });

module.exports = mongoose.model('Table', tableSchema);
