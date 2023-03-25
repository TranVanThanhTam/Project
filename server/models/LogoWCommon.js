const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const LogoWCommonSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
});

const LogoWCommon = model('LogoWCommon', LogoWCommonSchema,)
module.exports = LogoWCommon