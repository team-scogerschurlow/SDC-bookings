var mysql = require('mysql');

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
    return Math.floor(Math.random()*(5 - 3) + 3);
}

function generatePrice () {
    return Math.floor(Math.random()*1000);
}

function generateAvailability () {
    return Math.floor(Math.random()*1);
}

const dayIncrement = 86400000;

function multipleRentalPriceInfoGenerator (x) {
    const rentalsPriceInfo = [];

    for (var i = 0; i < x; i++) {
        const tempObj = {
            id: i,
            guest_limit: guestLimitGenerator(),
            service_fee: serviceFeeGenerator(),
            taxes: taxesGenerator(),
            rating: ratingGenerator()
        };

        rentalsPriceInfo.push(tempObj);

    }

   return rentalsPriceInfo;

}

function rentalsAvailabilityGenerator (rentals, x) {
    const rentalsAvailability = [];
    const refDate = Date.now();
    let contextCounter = 0;
    rentals.forEach((rental)=> {
    
       for (var i = 0; i < x; i++) {
           const tempObj = {
               id: contextCounter,
               date: new Date(refDate + dayIncrement*i),
               price: generatePrice(),
               available: generateAvailability(),
               views: generatePrice(),
               rental_id: rental.id
           }
           rentalsAvailability.push(tempObj);
           contextCounter++;
       }

    })
    return rentalsAvailability;
}

const tenRentals = multipleRentalPriceInfoGenerator(10);


const connection = mysql.createConnection({
    user: "root",
    database: "bookings"
})

// console.log(tenRentals);


connection.connect((err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Connected to MySQL DB");
})

tenRentals.forEach((rental)=>{
    connection.query(
        `INSERT INTO rental_price_info 
        (guest_limit, service_fee, taxes, rating) 
        VALUES 
        (${rental.guest_limit}, ${rental.service_fee}, 
        ${rental.taxes}, ${rental.rating});`
    );
})


connection.end();


