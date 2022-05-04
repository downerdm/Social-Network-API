const { Schema, Types } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reactions');

const thoughtSchema = new Schema(
{
  thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdTime) => moment(createdTime).format('MMMM Do YYYY, h:mm:ss a'),
    },
    username: {
      type: String,
      required: true,
    }, 
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const reactionCount = schema.virtual('reactionCount');
reactionCount.get(function() {
  return this.reactions.length;
});

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      }, 
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdTime) => moment(createdTime).format('MMMM Do YYYY, h:mm:ss a'),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

module.exports = thoughtSchema;
