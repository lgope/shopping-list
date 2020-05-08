// Catch Async Error
const catchAsync = require('../utils/catchAsync');

// Global Error Handler
const AppError = require('../utils/appError');

// Item Model
const Item = require('../models/itemModel');

exports.getAllItem = catchAsync(async (req, res, next) => {
  const items = await Item.find().sort({ date: -1 });

  // SEND RESPONSE
  res.status(200).json(items);
});

exports.createItem = catchAsync(async (req, res, next) => {
  const newItem = await Item.create({ name: req.body.name });

  res.status(201).json(newItem);
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return next(new AppError('No item found with that ID', 404));

  res.status(200).json({ success: true });
});
