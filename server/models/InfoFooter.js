const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const InfoFooterSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
});

const InfoFooter = model('InfoFooter', InfoFooterSchema,)
module.exports = InfoFooter