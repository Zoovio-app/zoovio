DROP DATABASE if EXISTS zoovio_db;

CREATE DATABASE zoovio_db;

\c zoovio_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id VARCHAR NOT NULL PRIMARY KEY UNIQUE ,
    email VARCHAR NOT NULL UNIQUE,
    name VARCHAR,
    phone VARCHAR
);