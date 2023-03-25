const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FeatureWCommonSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
});

const FeatureWCommon = model('FeatureWCommon', FeatureWCommonSchema,)
module.exports = FeatureWCommon