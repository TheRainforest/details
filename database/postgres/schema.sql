\c itemdetails;
DROP DATABASE IF EXISTS itemdetails;
DROP TABLE IF EXISTS details;
CREATE DATABASE itemdetails;

CREATE TABLE details (
  id INT PRIMARY KEY,
  productName VARCHAR(128) NOT NULL,
  producer VARCHAR(64) NOT NULL,
  answeredQuestions SMALLINT NOT NULL,
  numberOfRatings SMALLINT NOT NULL,
  oneStars SMALLINT NOT NULL,
  twoStars SMALLINT NOT NULL,
  threeStars SMALLINT NOT NULL,
  fourStars SMALLINT NOT NULL,
  fiveStars SMALLINT NOT NULL,
  price NUMERIC(7,2) NOT NULL,
  inStock BOOLEAN,
  productInfo TEXT[2]
)
