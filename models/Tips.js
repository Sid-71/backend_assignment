const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new Schema({
  place: {
    type: String,
    required: true
  },
  tip :{
    type : Number,
  },
  totalAmount: {
    type: Number,
    required: true
  },
  percentage :{
    type : Number,
    required : true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Tip = mongoose.model('Tip', tipSchema);

module.exports = Tip;
