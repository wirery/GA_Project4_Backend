const mongoose = require('mongoose')

const coinSchema = mongoose.Schema({
    country: { type: String, required: true },
    img: { type: String, required: true },
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    grade: { type: Number, required: true },
    value: { type: Number, required: true }

})

module.exports = mongoose.model('Coin', coinSchema)

