const Item = require('./database');

exports.createDoc = (item, callback) => {
  const newItem = new Item(item);
  newItem.save((err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};


exports.getDoc = (itemId, callback) => {
  Item.findOne({ id: itemId }, (err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};
