CREATE DATABASE IF NOT EXISTS bookings;

USE bookings;

CREATE TABLE rental_price_info IF NOT EXISTS (
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guest_limit INT NOT NULL DEFAULT 2,
    service_fee INT NOT NULL DEFAULT 10,
    taxes INT NOT NULL DEFAULT 5,
    rating INT NOT NULL DEFAULT 3
);

CREATE TABLE rental_availability IF NOT EXISTS (
    id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    date DATE NOT NULL,
    price INT NOT NULL DEFAULT 50,
    available INT NOT NULL DEFAULT 0,
    views INT NOT NULL DEFAULT 0,
    rental_id INT,
    FOREIGN KEY rental_id REFERENCES rental_price_info(id) ON DELETE CASCADE
);

