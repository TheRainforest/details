const faker = require('faker');
const fs = require('fs');

const SIZE = 10000000; // 10M
console.time('done in');
const writeUsers = fs.createWriteStream('./users.csv');
writeUsers.write(
  `id,
  productName,
  producer,
  answeredQuestions,
  numberOfRatings,
  oneStars,
  twoStars,
  threeStars,
  fourStars,
  fiveStars,
  price,
  inStock,
  productInfo
`, 'utf8',
);

//  Item properties (13)
// ***********************
// id
// productName
// producer
// answeredQuestions
// numberOfRatings
// oneStars
// twoStars
// threeStars
// fourStars
// fiveStars
// price
// inStock
// productInfo

const generateLargeDataSet = (writer, size, encoding, callback) => {
  let i = size;
  let id = 0;
  let ok = true;
  const write = () => {
    do {
      i -= 1;
      id += 1;
      const answeredQuestions = Math.floor(Math.random() * 100);
      const inStock = Math.random() > 0.5;
      // stars
      const oneStars = Math.floor(Math.random() * 100);
      const twoStars = Math.floor(Math.random() * 100);
      const threeStars = Math.floor(Math.random() * 100);
      const fourStars = Math.floor(Math.random() * 100);
      const fiveStars = Math.floor(Math.random() * 100);
      const numberOfRatings = oneStars + twoStars + threeStars + fourStars + fiveStars;
      const price = (10000 * Math.random()).toFixed(2);
      const producer = faker.company.companyName();
      const productName = faker.commerce.productName();
      const productInfo = [
        faker.lorem.sentence(),
        faker.lorem.paragraph(),
      ];
      const data = `
        ${id},
        ${productName},
        ${producer},
        ${answeredQuestions},
        ${numberOfRatings},
        ${oneStars},
        ${twoStars},
        ${threeStars},
        ${fourStars},
        ${fiveStars},
        ${price},
        ${inStock},
        ${productInfo}\n`;

      if (i === 0) {
        // Last time!
        console.timeEnd('done in');
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  };
  write();
};
generateLargeDataSet(writeUsers, SIZE, 'utf-8', () => {
  writeUsers.end();
});
