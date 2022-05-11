const { Thoughts } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a thought by its id
  getThoughtsById(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  createNewThought(req, res) {
    Thoughts.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: req.body.userId }, 
          { $push: { thoughts: thought } },
      ) .then ((newThought) => res.json(thought))
        })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: 'No such thought exists' })
        }  
      }
        
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
// Add a reaction to a thought
createNewReaction(req, res) {
  console.log('You are adding a reaction');
  console.log(req.body);
  Thoughts.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'No thought found with that ID :(' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
// Remove a reaction from a thought
deleteReaction(req, res) {
  Thoughts.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'No thought found with that ID :(' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
};
