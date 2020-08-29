DROP DATABASE if EXISTS zoovio_db;

CREATE DATABASE zoovio_db;

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
    pet_name VARCHAR,
    img VARCHAR,
    dob VARCHAR
);

CREATE TABLE tasks
(
    task_id SERIAL PRIMARY KEY,
    pet_id INT REFERENCES pets(id) ON DELETE CASCADE,
    task VARCHAR NOT NULL,
    due_date TIMESTAMP,
    due_time TIME
);

INSERT INTO users
    (user_id,email,name,phone)
VALUES('hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'user1@gmail.com', 'Uduakabasi', '718-554-6799');

INSERT INTO pets
    ( owner, pet_name, img, dob)
VALUES( 'hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'Coco Bunny', 'https://firebasestorage.googleapis.com/v0/b/zoovio-app.appspot.com/o/images%2FRabbit3.jpg?alt=media&token=1d64e478-e1e3-45c8-bec5-0eb3e7d421f', '02/22/2020'),
    ( 'hp0PJ7vUfJX4JCOjgGxZkkMzXTs2', 'Buddy', 'https://firebasestorage.googleapis.com/v0/b/zoovio-app.appspot.com/o/images%2Fbuddy.jpg?alt=media&token=0c666e54-9007-4bc0-b15e-e5c425917870', '07/1/2020');

-- INSERT INTO tasks
--     (task_id, pet_id, task, due_date, due_time)
-- VALUES('1', '1', 'Take Coco to the vet', '2020-07-24', '03:30:00');