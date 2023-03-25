const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const LogoFooterCommonSchema = new Schema({
    link: { type: String, required: true },
    img: { type: String, required: true },
});

const LogoFooterCommon = model('LogoFooterCommon', LogoFooterCommonSchema,)
module.exports = LogoFooterCommon