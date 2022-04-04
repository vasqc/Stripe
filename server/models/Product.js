const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    required: true,
    trim: true

  },
  TDS: {
    type: Number,
    required: true,
    trim: true
  },
  origin: {
    type: String,
    required: true,
    trim: true
  },
  carbonation: {
    type: String
  },
  est: {
    type: Number,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  est: {
    type: Number
  },
  company_website: {
    type: String,
    required: true
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;