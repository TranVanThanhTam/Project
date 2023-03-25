const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FeatureCommonSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
});

const FeatureCommon = model('FeatureCommon', FeatureCommonSchema,)
module.exports = FeatureCommon