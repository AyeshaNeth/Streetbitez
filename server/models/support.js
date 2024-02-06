const mongoose= require('mongoose')
const {Schema} =mongoose

const supportSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    supportText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const SupportModel = mongoose.model('Support', supportSchema);
  module.exports = SupportModel;