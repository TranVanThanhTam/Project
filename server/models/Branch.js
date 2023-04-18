const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const branchSchema = new Schema({
    name: { type: String, required: true },
});

const Branch = model('Branch', branchSchema,)
module.exports = Branch