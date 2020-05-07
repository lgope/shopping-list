const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Item controller
const itemController = require('../controllers/itemController');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', itemController.getAllItem);

// @route POST api/items
// @desc Create An Item
// @access For now Private
router.post('/', auth, itemController.createItem);

// @route DELETE api/items
// @desc Delete An Item
// @access For now Private
router.delete('/:id', auth, itemController.deleteItem);

module.exports = router;
