const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // get the id in database _id field
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('goal', goalSchema);
