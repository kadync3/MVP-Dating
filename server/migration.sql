DROP TABLE IF EXISTS users;

CREATE TABLE 
  users ( 
  userId serial PRIMARY KEY,
  firstName varchar(50),
  lastName varchar(50),
  weight int,
  age int,
  height varchar(10),
  gender varchar(6),
  preferedGender varchar(6),
  intent text,
  imageArray text
);