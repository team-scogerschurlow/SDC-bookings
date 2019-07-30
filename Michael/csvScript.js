//fields line of csv file for safe keeping
// id,guest_limit,service_fee,taxes,rating,rental_availability.0.rental_date,rental_availability.0.price,rental_availability.0.available,rental_availability.0.views,rental_availability.1.rental_date,rental_availability.1.price,rental_availability.1.available,rental_availability.1.views,rental_availability.2.rental_date,rental_availability.2.price,rental_availability.2.available,rental_availability.2.views,rental_availability.3.rental_date,rental_availability.3.price,rental_availability.3.available,rental_availability.3.views,rental_availability.4.rental_date,rental_availability.4.price,rental_availability.4.available,rental_availability.4.views,rental_availability.5.rental_date,rental_availability.5.price,rental_availability.5.available,rental_availability.5.views,rental_availability.6.rental_date,rental_availability.6.price,rental_availability.6.available,rental_availability.6.views,rental_availability.7.rental_date,rental_availability.7.price,rental_availability.7.available,rental_availability.7.views,rental_availability.8.rental_date,rental_availability.8.price,rental_availability.8.available,rental_availability.8.views,rental_availability.9.rental_date,rental_availability.9.price,rental_availability.9.available,rental_availability.9.views,rental_availability.10.rental_date,rental_availability.10.price,rental_availability.10.available,rental_availability.10.views,rental_availability.11.rental_date,rental_availability.11.price,rental_availability.11.available,rental_availability.11.views,rental_availability.12.rental_date,rental_availability.12.price,rental_availability.12.available,rental_availability.12.views,rental_availability.13.rental_date,rental_availability.13.price,rental_availability.13.available,rental_availability.13.views,rental_availability.14.rental_date,rental_availability.14.price,rental_availability.14.available,rental_availability.14.views,rental_availability.15.rental_date,rental_availability.15.price,rental_availability.15.available,rental_availability.15.views,rental_availability.16.rental_date,rental_availability.16.price,rental_availability.16.available,rental_availability.16.views,rental_availability.17.rental_date,rental_availability.17.price,rental_availability.17.available,rental_availability.17.views,rental_availability.18.rental_date,rental_availability.18.price,rental_availability.18.available,rental_availability.18.views,rental_availability.19.rental_date,rental_availability.19.price,rental_availability.19.available,rental_availability.19.views,rental_availability.20.rental_date,rental_availability.20.price,rental_availability.20.available,rental_availability.20.views,rental_availability.21.rental_date,rental_availability.21.price,rental_availability.21.available,rental_availability.21.views,rental_availability.22.rental_date,rental_availability.22.price,rental_availability.22.available,rental_availability.22.views,rental_availability.23.rental_date,rental_availability.23.price,rental_availability.23.available,rental_availability.23.views,rental_availability.24.rental_date,rental_availability.24.price,rental_availability.24.available,rental_availability.24.views,rental_availability.25.rental_date,rental_availability.25.price,rental_availability.25.available,rental_availability.25.views,rental_availability.26.rental_date,rental_availability.26.price,rental_availability.26.available,rental_availability.26.views,rental_availability.27.rental_date,rental_availability.27.price,rental_availability.27.available,rental_availability.27.views,rental_availability.28.rental_date,rental_availability.28.price,rental_availability.28.available,rental_availability.28.views,rental_availability.29.rental_date,rental_availability.29.price,rental_availability.29.available,rental_availability.29.views,rental_availability.30.rental_date,rental_availability.30.price,rental_availability.30.available,rental_availability.30.views
const {appendFileSync} = require('fs')
function generatePrice () {
  return Math.floor(Math.random()*1000);
}

function generateAvailability () {
  return Math.floor(Math.random()*2);
}
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

function generatePrice () {
  return Math.floor(Math.random()*1000);
}

function generateAvailability () {
  return Math.floor(Math.random()*2);
}
//start and end
function chunkGenerator (start, end) {
  let data1 = ''
  for (let j = start; j < end; j++) {
  data1 += `\n${j}, ${guestLimitGenerator()},${serviceFeeGenerator()}, ${taxesGenerator()},${ratingGenerator()}, ${arrayDataGenerator()}` 
  }
  return data1 
}
function arrayDataGenerator() {
  const dayIncrement = 86400000;
  const refDate = Date.now() 
  let data2 = ''
     for (var i = 0; i < 30; i++) {
        let date = new Date(refDate + dayIncrement * i).toISOString().slice(0, 10)
        // date = '"' + date + '"'
        data2 +=`${date}, ${generatePrice()}, ${generateAvailability()}, ${generatePrice()},`
     }
  return data2.slice(0, data2.length-1)
}

appendFileSync(__dirname + '/data.csv', `${chunkGenerator(100, 1000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(1000100, 2000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(2000100, 3000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(3000100, 4000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(4000100, 5000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(5000100, 6000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(6000100, 7000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(7000100, 8000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(8000100, 9000100)}`)
appendFileSync(__dirname + '/data.csv', `${chunkGenerator(9000100, 10000100)}`)