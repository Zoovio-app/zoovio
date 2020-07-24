-- DROP DATABASE if EXISTS zoovio_db;

-- CREATE DATABASE zoovio_db;

-- \c zoovio_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users
(
    user_id VARCHAR NOT NULL PRIMARY KEY UNIQUE ,
    email VARCHAR NOT NULL UNIQUE,
    name VARCHAR,
    phone VARCHAR
);

CREATE TABLE pets
(
    id SERIAL PRIMARY KEY UNIQUE,
    owner VARCHAR REFERENCES users(user_id) ON DELETE CASCADE,
    pet_name VARCHAR
);

CREATE TABLE tasks
(
    task_id SERIAL PRIMARY KEY,
    pet_id INT REFERENCES pets(id) ON DELETE CASCADE,
    task VARCHAR NOT NULL,
    due_date TIMESTAMP
);

INSERT INTO users
    (user_id,email,name,phone)
VALUES('hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'user1@gmail.com', 'Uduakabasi', '718-554-6799');

INSERT INTO pets
    (id, owner, pet_name)
VALUES('1', 'hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'Bunny');

INSERT INTO tasks
    (task_id, pet_id, task, due_date)
VALUES('1', '1', 'hop', '2020-07-24 03:30:00');