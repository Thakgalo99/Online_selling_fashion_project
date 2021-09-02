var mongoose = require('mongoose');

var productsSchema = mongoose.Schema({
    strName: String,
    strImage: String,
    strCategory: String,
    intQuantity: Number,
    intPrice: Number,
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model
    ('ProductsTable', productsSchema);