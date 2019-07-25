//this file is for seeding the script file data in the mongoDB
const mongoose = require('mongoose')
const script = require('./script.js')

const mongoUri = 'mongodb://localhost:27017/rental_price_info';
mongoose.connect(mongoUri, { useNewUrlParser: true })

const rental_price_infoSchema = new mongoose.Schema({
  id: Number, 
  guest_limit: Number,
  service_fee: Number,
  taxes: Number,
  rating: Number
})

const rental_price_info = mongoose.model('rental_price_info', rental_price_infoSchema)

// module.exports = rental_price_info

const insertRental_Price_Info = (x) => {
  rental_price_info.create(script.multipleRentalPriceInfoGenerator(x))
  // .then(()=> db.disconnect())
}

insertRental_Price_Info(100000)

