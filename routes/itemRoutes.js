const express = require('express');
const router = express.Router();

// Item controller
const itemController = require('../controllers/itemController');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', itemController.getAllItem);

// @route POST api/items
// @desc Create An Item
// @access For now Public
router.post('/', itemController.createItem);

// @route DELETE api/items
// @desc Delete An Item
// @access For now Public
router.delete('/:id', itemController.deleteItem);

module.exports = router;
