const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SizeSchema = new Schema({
    size: { type: String, required: true },
});

const Size = model('Size', SizeSchema,)
module.exports = Size