const express = require('express');
const router = express.Router();
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  toggleComplete
} = require('../controllers/itemController');

// Item routes
router.route('/items')
  .get(getItems)
  .post(createItem);

router.route('/items/:id')
  .get(getItem)
  .delete(deleteItem);

router.route('/items/:id/toggle')
  .put(toggleComplete);

module.exports = router;