const { Schema, model, default: mongoose } = require('mongoose');
const thoughtSchema = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    },
    thoughts: [thoughtSchema],
  },
  {
    friends: [userSchema],
    },
);

const friendCount = schema.virtual('friendCount');
friendCount.get(function() {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
