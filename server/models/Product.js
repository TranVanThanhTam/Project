const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const productSchema = new Schema({
    title: { type: String, required: true },
    discount: { type: Number, min: 0, max: 75, default: 0 },
    price: { type: Number, required: true, min: 0, default: 0 },
    selling: { type: Boolean, required: true },
    imgLeave: { type: String, required: true },
    imgHover: { type: String, required: true },
    size: { type: String, required: true },
},
{
  versionKey: false,
},
);

// Virtuals
productSchema.virtual('total').get(function () {
    return (this.price * (100 - this.discount)) / 100;
  });

// Virtual with Populate
productSchema.virtual('branch', {
  ref: 'Branch',
  localField: 'branchId',
  foreignField: '_id',
  justOne: true,
});

// Include virtuals

// Virtuals in console.log()
productSchema.set('toObject', { virtuals: true });
// Virtuals in JSON
productSchema.set('toJSON', { virtuals: true });

productSchema.plugin(mongooseLeanVirtuals);


const Product = model('Product', productSchema,)
module.exports = Product