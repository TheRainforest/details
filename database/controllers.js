const Item = require('./database');

const getDocument = (itemId, callback) => {
  Item.findOne({ id: itemId }, (err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};


module.exports = getDocument;
