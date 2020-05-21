const Item = require('./database');

exports.saveDoc = (item, callback) => {
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

exports.updateDoc = (itemId, updateKey, updateValue, callback) => {
  Item.findOneAndUpdate({ id: itemId },
    { $set: { [updateKey]: updateValue } }, { new: true, upsert: true },
    (err, item) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, item);
      }
    });
};

exports.deleteDoc = (itemId, callback) => {
  Item.findOneAndDelete({ id: itemId }, (err, item) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};
