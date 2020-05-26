require('dotenv').config();
const { Pool } = require('pg');
const path = require('path');

const itemDetails = path.join(__dirname, '../../PGdetails.csv');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: 'itemdetails',
  port: '5432',
});


pool.connect()
  .then(() => console.time('import took'))
  .then(() => pool.query(`COPY details(id,productName,producer,answeredQuestions,numberOfRatings,oneStars,twoStars,threeStars,fourStars,fiveStars,price,inStock,productInfo) FROM '${itemDetails}' DELIMITER '|' CSV HEADER`)
    .then(() => console.timeEnd('import took')))
  .catch((err) => console.error('ERROR: ', err, '"yarn run pg:init" is prerequiste for this import to work'));
