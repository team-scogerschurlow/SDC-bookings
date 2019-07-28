//this file is for generating data for both mongoDB & PostGres DB
//it will contain a function that generates n amount of records


/*
example mongoose collection
rental_price_info = {
  id: Number, 
  guest_limit: Number,
  service_fee: Number,
  taxes: Number,
  rating: Number
},
*/
/*
rental_availability =
 [{
    rental_date: Date,
    price: Number,
    available: Number,
    views: Number
  }]
*/
function guestLimitGenerator () {
  return Math.floor(Math.random() * (20 - 2) + 2);
}

function serviceFeeGenerator () {
  return Math.floor(Math.random()* 100);
}

function taxesGenerator () {
  return parseFloat((Math.random()*30).toFixed(2));
}

function ratingGenerator () {
  return Math.floor(Math.random()*(6 - 3) + 3);
}

function multipleRentalPriceInfoGenerator (x) {
  const rentalsPriceInfo = [];

  for (var i = 0; i < x; i++) {
      const tempObj = {
          id: i+100,
          guest_limit: guestLimitGenerator(),
          service_fee: serviceFeeGenerator(),
          taxes: taxesGenerator(),
          rating: ratingGenerator(),
          rental_availability: rentalsAvailabilityGenerator(30)
      };

      rentalsPriceInfo.push(tempObj);

  }

 return rentalsPriceInfo;

}

function generatePrice () {
  return Math.floor(Math.random()*1000);
}

function generateAvailability () {
  return Math.floor(Math.random()*2);
}


function rentalsAvailabilityGenerator (x) {
  const rentalsAvailability = []
  const dayIncrement = 86400000;
  const refDate = Date.now() 
     for (var i = 0; i < x; i++) {
         let date = new Date(refDate + dayIncrement * i).toISOString().slice(0, 10)
         date = '"' + date + '"'
         const tempObj = {
             rental_date: date,
             price: generatePrice(),
             available: generateAvailability(),
             views: generatePrice()
         }
         rentalsAvailability.push(tempObj)
     }
  return rentalsAvailability
} 

console.log(rentalsAvailabilityGenerator(30))
appendFileSync(__dirname + '/data.csv', `${multipleRentalPriceInfoGenerator(100)}`)
module.exports = {multipleRentalPriceInfoGenerator}
