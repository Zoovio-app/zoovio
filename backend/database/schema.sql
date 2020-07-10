DROP DATABASE if EXISTS zoovio_db;

CREATE DATABASE zoovio_db;

\c zoovio_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id VARCHAR PRIMARY KEY UNIQUE,
    email VARCHAR UNIQUE,
    name VARCHAR,
    phone VARCHAR
);