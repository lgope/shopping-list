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

  console.log(newItem);

  if (!newItem)
    return next(
      new AppError('Something went wrong while trying to create the item', 400)
    );

  res.status(201).json(newItem);
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  const item = await Item.findOne({ _id: req.params.id });
  if (!item) return next(new AppError('No item found', 404));

  const removedItem = await item.remove();
  if (!removedItem)
    return next(
      new AppError('Something went wrong while trying to delete the item', 400)
    );

  res.status(200).json({ success: true });
});
