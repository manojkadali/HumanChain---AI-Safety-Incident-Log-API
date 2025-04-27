const Item = require('../models/Item');

// Get all items
exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find().sort({ category: -1, createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (err) {
    next(err);
  }
};

// Get single item
exports.getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (err) {
    next(err);
  }
};

// Create new item
exports.createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    } else {
      next(err);
    }
  }
};

// Delete item
exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// Toggle complete status
exports.toggleComplete = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    item.completed = !item.completed;
    await item.save();
    
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (err) {
    next(err);
  }
};