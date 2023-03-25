const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const LogoCommonSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
});

const LogoCommon = model('LogoCommon', LogoCommonSchema,)
module.exports = LogoCommon