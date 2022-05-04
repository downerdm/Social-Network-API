const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addNewFriend,
  deleteFriend,
 
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUserById).delete(deleteUserById).put(updateUserById);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(deleteFriend);

module.exports = router;
