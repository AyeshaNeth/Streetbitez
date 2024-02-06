const mongoose= require('mongoose')
const {Schema} =mongoose

const feedbackSchema = new Schema({
  userName: String,  
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model, assuming you have a User schema
      required: true,
    },

    feedbackText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    
  });

  const FeedbackModel = mongoose.model('Feedback', feedbackSchema);
  module.exports = FeedbackModel;