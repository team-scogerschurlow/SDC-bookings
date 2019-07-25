//this file is for generating data for both mongoDB & PostGres DB
//it will contain a function that generates n amount of records

/*
example mongoose collection
rental_price_info = {
  id: number, 
  guest_limit: Number,
  service_fee: Number,
  taxes: Decimal128,
  rating: Number
},
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
          rating: ratingGenerator()
      };

      rentalsPriceInfo.push(tempObj);

  }

 return rentalsPriceInfo;

}
module.exports = {multipleRentalPriceInfoGenerator}
/*
rental_availability = {
  id: number,
  rental date: date,
  price: number,
  available: boolean or number,
  views: number,
  rental_id: number(matches id # above)
}
*/
// function generatePrice () {
//   return Math.floor(Math.random()*1000);
// }

// function generateAvailability () {
//   return Math.floor(Math.random()*2);
// }