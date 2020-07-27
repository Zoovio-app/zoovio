-- DROP DATABASE if EXISTS zoovio_db;

-- CREATE DATABASE zoovio_db;

-- \c zoovio_db;

-- DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id VARCHAR NOT NULL PRIMARY KEY UNIQUE ,
    email VARCHAR NOT NULL UNIQUE,
    name VARCHAR,
    phone VARCHAR
);

INSERT INTO users
    (user_id,email,name,phone)
VALUES('hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'user1@gmail.com', 'Uduakabasi', '718-554-6799');