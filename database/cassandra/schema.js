
const schema = `
      CREATE TABLE IF NOT EXISTS itemdetails.details (
        id INT,
        productName TEXT,
        producer TEXT,
        answeredQuestions SMALLINT,
        numberOfRatings SMALLINT,
        oneStars SMALLINT,
        twoStars SMALLINT,
        threeStars SMALLINT,
        fourStars SMALLINT,
        fiveStars SMALLINT,
        price DECIMAL,
        inStock BOOLEAN,
        productinfo set<text>,
        PRIMARY KEY (id)
      )
    `;
module.exports = schema;
