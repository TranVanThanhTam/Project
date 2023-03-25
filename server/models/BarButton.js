const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BarButtonSchema = new Schema({
    title: { type: String, required: true },
    background: { type: Boolean, required: true },
});

const BarButton = model('BarButton', BarButtonSchema,)
module.exports = BarButton